# `vpnConnection` Submodule <a name="`vpnConnection` Submodule" id="@cdktf/provider-aws.vpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnConnection <a name="VpnConnection" id="@cdktf/provider-aws.vpnConnection.VpnConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection aws_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

new vpnConnection.VpnConnection(scope: Construct, id: string, config: VpnConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig">VpnConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig">VpnConnectionConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTunnel1LogOptions` <a name="putTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions"></a>

```typescript
public putTunnel1LogOptions(value: VpnConnectionTunnel1LogOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---

##### `putTunnel2LogOptions` <a name="putTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions"></a>

```typescript
public putTunnel2LogOptions(value: VpnConnectionTunnel2LogOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---

##### `resetEnableAcceleration` <a name="resetEnableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetEnableAcceleration"></a>

```typescript
public resetEnableAcceleration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalIpv4NetworkCidr` <a name="resetLocalIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv4NetworkCidr"></a>

```typescript
public resetLocalIpv4NetworkCidr(): void
```

##### `resetLocalIpv6NetworkCidr` <a name="resetLocalIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv6NetworkCidr"></a>

```typescript
public resetLocalIpv6NetworkCidr(): void
```

##### `resetOutsideIpAddressType` <a name="resetOutsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetOutsideIpAddressType"></a>

```typescript
public resetOutsideIpAddressType(): void
```

##### `resetRemoteIpv4NetworkCidr` <a name="resetRemoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv4NetworkCidr"></a>

```typescript
public resetRemoteIpv4NetworkCidr(): void
```

##### `resetRemoteIpv6NetworkCidr` <a name="resetRemoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv6NetworkCidr"></a>

```typescript
public resetRemoteIpv6NetworkCidr(): void
```

##### `resetStaticRoutesOnly` <a name="resetStaticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetStaticRoutesOnly"></a>

```typescript
public resetStaticRoutesOnly(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransitGatewayId"></a>

```typescript
public resetTransitGatewayId(): void
```

##### `resetTransportTransitGatewayAttachmentId` <a name="resetTransportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransportTransitGatewayAttachmentId"></a>

```typescript
public resetTransportTransitGatewayAttachmentId(): void
```

##### `resetTunnel1DpdTimeoutAction` <a name="resetTunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutAction"></a>

```typescript
public resetTunnel1DpdTimeoutAction(): void
```

##### `resetTunnel1DpdTimeoutSeconds` <a name="resetTunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutSeconds"></a>

```typescript
public resetTunnel1DpdTimeoutSeconds(): void
```

##### `resetTunnel1IkeVersions` <a name="resetTunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1IkeVersions"></a>

```typescript
public resetTunnel1IkeVersions(): void
```

##### `resetTunnel1InsideCidr` <a name="resetTunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideCidr"></a>

```typescript
public resetTunnel1InsideCidr(): void
```

##### `resetTunnel1InsideIpv6Cidr` <a name="resetTunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideIpv6Cidr"></a>

```typescript
public resetTunnel1InsideIpv6Cidr(): void
```

##### `resetTunnel1LogOptions` <a name="resetTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1LogOptions"></a>

```typescript
public resetTunnel1LogOptions(): void
```

##### `resetTunnel1Phase1DhGroupNumbers` <a name="resetTunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1DhGroupNumbers"></a>

```typescript
public resetTunnel1Phase1DhGroupNumbers(): void
```

##### `resetTunnel1Phase1EncryptionAlgorithms` <a name="resetTunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1EncryptionAlgorithms"></a>

```typescript
public resetTunnel1Phase1EncryptionAlgorithms(): void
```

##### `resetTunnel1Phase1IntegrityAlgorithms` <a name="resetTunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1IntegrityAlgorithms"></a>

```typescript
public resetTunnel1Phase1IntegrityAlgorithms(): void
```

##### `resetTunnel1Phase1LifetimeSeconds` <a name="resetTunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1LifetimeSeconds"></a>

```typescript
public resetTunnel1Phase1LifetimeSeconds(): void
```

##### `resetTunnel1Phase2DhGroupNumbers` <a name="resetTunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2DhGroupNumbers"></a>

```typescript
public resetTunnel1Phase2DhGroupNumbers(): void
```

##### `resetTunnel1Phase2EncryptionAlgorithms` <a name="resetTunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2EncryptionAlgorithms"></a>

```typescript
public resetTunnel1Phase2EncryptionAlgorithms(): void
```

##### `resetTunnel1Phase2IntegrityAlgorithms` <a name="resetTunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2IntegrityAlgorithms"></a>

```typescript
public resetTunnel1Phase2IntegrityAlgorithms(): void
```

##### `resetTunnel1Phase2LifetimeSeconds` <a name="resetTunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2LifetimeSeconds"></a>

```typescript
public resetTunnel1Phase2LifetimeSeconds(): void
```

##### `resetTunnel1PresharedKey` <a name="resetTunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1PresharedKey"></a>

```typescript
public resetTunnel1PresharedKey(): void
```

##### `resetTunnel1RekeyFuzzPercentage` <a name="resetTunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyFuzzPercentage"></a>

```typescript
public resetTunnel1RekeyFuzzPercentage(): void
```

##### `resetTunnel1RekeyMarginTimeSeconds` <a name="resetTunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyMarginTimeSeconds"></a>

```typescript
public resetTunnel1RekeyMarginTimeSeconds(): void
```

##### `resetTunnel1ReplayWindowSize` <a name="resetTunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1ReplayWindowSize"></a>

```typescript
public resetTunnel1ReplayWindowSize(): void
```

##### `resetTunnel1StartupAction` <a name="resetTunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1StartupAction"></a>

```typescript
public resetTunnel1StartupAction(): void
```

##### `resetTunnel2DpdTimeoutAction` <a name="resetTunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutAction"></a>

```typescript
public resetTunnel2DpdTimeoutAction(): void
```

##### `resetTunnel2DpdTimeoutSeconds` <a name="resetTunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutSeconds"></a>

```typescript
public resetTunnel2DpdTimeoutSeconds(): void
```

##### `resetTunnel2IkeVersions` <a name="resetTunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2IkeVersions"></a>

```typescript
public resetTunnel2IkeVersions(): void
```

##### `resetTunnel2InsideCidr` <a name="resetTunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideCidr"></a>

```typescript
public resetTunnel2InsideCidr(): void
```

##### `resetTunnel2InsideIpv6Cidr` <a name="resetTunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideIpv6Cidr"></a>

```typescript
public resetTunnel2InsideIpv6Cidr(): void
```

##### `resetTunnel2LogOptions` <a name="resetTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2LogOptions"></a>

```typescript
public resetTunnel2LogOptions(): void
```

##### `resetTunnel2Phase1DhGroupNumbers` <a name="resetTunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1DhGroupNumbers"></a>

```typescript
public resetTunnel2Phase1DhGroupNumbers(): void
```

##### `resetTunnel2Phase1EncryptionAlgorithms` <a name="resetTunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1EncryptionAlgorithms"></a>

```typescript
public resetTunnel2Phase1EncryptionAlgorithms(): void
```

##### `resetTunnel2Phase1IntegrityAlgorithms` <a name="resetTunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1IntegrityAlgorithms"></a>

```typescript
public resetTunnel2Phase1IntegrityAlgorithms(): void
```

##### `resetTunnel2Phase1LifetimeSeconds` <a name="resetTunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1LifetimeSeconds"></a>

```typescript
public resetTunnel2Phase1LifetimeSeconds(): void
```

##### `resetTunnel2Phase2DhGroupNumbers` <a name="resetTunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2DhGroupNumbers"></a>

```typescript
public resetTunnel2Phase2DhGroupNumbers(): void
```

##### `resetTunnel2Phase2EncryptionAlgorithms` <a name="resetTunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2EncryptionAlgorithms"></a>

```typescript
public resetTunnel2Phase2EncryptionAlgorithms(): void
```

##### `resetTunnel2Phase2IntegrityAlgorithms` <a name="resetTunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2IntegrityAlgorithms"></a>

```typescript
public resetTunnel2Phase2IntegrityAlgorithms(): void
```

##### `resetTunnel2Phase2LifetimeSeconds` <a name="resetTunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2LifetimeSeconds"></a>

```typescript
public resetTunnel2Phase2LifetimeSeconds(): void
```

##### `resetTunnel2PresharedKey` <a name="resetTunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2PresharedKey"></a>

```typescript
public resetTunnel2PresharedKey(): void
```

##### `resetTunnel2RekeyFuzzPercentage` <a name="resetTunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyFuzzPercentage"></a>

```typescript
public resetTunnel2RekeyFuzzPercentage(): void
```

##### `resetTunnel2RekeyMarginTimeSeconds` <a name="resetTunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyMarginTimeSeconds"></a>

```typescript
public resetTunnel2RekeyMarginTimeSeconds(): void
```

##### `resetTunnel2ReplayWindowSize` <a name="resetTunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2ReplayWindowSize"></a>

```typescript
public resetTunnel2ReplayWindowSize(): void
```

##### `resetTunnel2StartupAction` <a name="resetTunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2StartupAction"></a>

```typescript
public resetTunnel2StartupAction(): void
```

##### `resetTunnelInsideIpVersion` <a name="resetTunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnelInsideIpVersion"></a>

```typescript
public resetTunnelInsideIpVersion(): void
```

##### `resetVpnGatewayId` <a name="resetVpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetVpnGatewayId"></a>

```typescript
public resetVpnGatewayId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

vpnConnection.VpnConnection.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

vpnConnection.VpnConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

vpnConnection.VpnConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkAttachmentArn">coreNetworkAttachmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayConfiguration">customerGatewayConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList">VpnConnectionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Address">tunnel1Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpAsn">tunnel1BgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpHoldtime">tunnel1BgpHoldtime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1CgwInsideAddress">tunnel1CgwInsideAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptions">tunnel1LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference">VpnConnectionTunnel1LogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1VgwInsideAddress">tunnel1VgwInsideAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Address">tunnel2Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpAsn">tunnel2BgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpHoldtime">tunnel2BgpHoldtime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2CgwInsideAddress">tunnel2CgwInsideAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptions">tunnel2LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference">VpnConnectionTunnel2LogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2VgwInsideAddress">tunnel2VgwInsideAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vgwTelemetry">vgwTelemetry</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList">VpnConnectionVgwTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayIdInput">customerGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAccelerationInput">enableAccelerationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidrInput">localIpv4NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidrInput">localIpv6NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressTypeInput">outsideIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidrInput">remoteIpv4NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidrInput">remoteIpv6NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnlyInput">staticRoutesOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentIdInput">transportTransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutActionInput">tunnel1DpdTimeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSecondsInput">tunnel1DpdTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersionsInput">tunnel1IkeVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidrInput">tunnel1InsideCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6CidrInput">tunnel1InsideIpv6CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptionsInput">tunnel1LogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbersInput">tunnel1Phase1DhGroupNumbersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithmsInput">tunnel1Phase1EncryptionAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithmsInput">tunnel1Phase1IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSecondsInput">tunnel1Phase1LifetimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbersInput">tunnel1Phase2DhGroupNumbersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithmsInput">tunnel1Phase2EncryptionAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithmsInput">tunnel1Phase2IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSecondsInput">tunnel1Phase2LifetimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKeyInput">tunnel1PresharedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentageInput">tunnel1RekeyFuzzPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSecondsInput">tunnel1RekeyMarginTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSizeInput">tunnel1ReplayWindowSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupActionInput">tunnel1StartupActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutActionInput">tunnel2DpdTimeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSecondsInput">tunnel2DpdTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersionsInput">tunnel2IkeVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidrInput">tunnel2InsideCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6CidrInput">tunnel2InsideIpv6CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptionsInput">tunnel2LogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbersInput">tunnel2Phase1DhGroupNumbersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithmsInput">tunnel2Phase1EncryptionAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithmsInput">tunnel2Phase1IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSecondsInput">tunnel2Phase1LifetimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbersInput">tunnel2Phase2DhGroupNumbersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithmsInput">tunnel2Phase2EncryptionAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithmsInput">tunnel2Phase2IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSecondsInput">tunnel2Phase2LifetimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKeyInput">tunnel2PresharedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentageInput">tunnel2RekeyFuzzPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSecondsInput">tunnel2RekeyMarginTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSizeInput">tunnel2ReplayWindowSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupActionInput">tunnel2StartupActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersionInput">tunnelInsideIpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayIdInput">vpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayId">customerGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAcceleration">enableAcceleration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidr">localIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidr">localIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressType">outsideIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidr">remoteIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidr">remoteIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnly">staticRoutesOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentId">transportTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutAction">tunnel1DpdTimeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSeconds">tunnel1DpdTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersions">tunnel1IkeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidr">tunnel1InsideCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6Cidr">tunnel1InsideIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbers">tunnel1Phase1DhGroupNumbers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithms">tunnel1Phase1EncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithms">tunnel1Phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSeconds">tunnel1Phase1LifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbers">tunnel1Phase2DhGroupNumbers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithms">tunnel1Phase2EncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithms">tunnel1Phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSeconds">tunnel1Phase2LifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKey">tunnel1PresharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentage">tunnel1RekeyFuzzPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSeconds">tunnel1RekeyMarginTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSize">tunnel1ReplayWindowSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupAction">tunnel1StartupAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutAction">tunnel2DpdTimeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSeconds">tunnel2DpdTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersions">tunnel2IkeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidr">tunnel2InsideCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6Cidr">tunnel2InsideIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbers">tunnel2Phase1DhGroupNumbers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithms">tunnel2Phase1EncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithms">tunnel2Phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSeconds">tunnel2Phase1LifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbers">tunnel2Phase2DhGroupNumbers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithms">tunnel2Phase2EncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithms">tunnel2Phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSeconds">tunnel2Phase2LifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKey">tunnel2PresharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentage">tunnel2RekeyFuzzPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSeconds">tunnel2RekeyMarginTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSize">tunnel2ReplayWindowSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupAction">tunnel2StartupAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersion">tunnelInsideIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `coreNetworkAttachmentArn`<sup>Required</sup> <a name="coreNetworkAttachmentArn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkAttachmentArn"></a>

```typescript
public readonly coreNetworkAttachmentArn: string;
```

- *Type:* string

---

##### `customerGatewayConfiguration`<sup>Required</sup> <a name="customerGatewayConfiguration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayConfiguration"></a>

```typescript
public readonly customerGatewayConfiguration: string;
```

- *Type:* string

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.routes"></a>

```typescript
public readonly routes: VpnConnectionRoutesList;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList">VpnConnectionRoutesList</a>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `tunnel1Address`<sup>Required</sup> <a name="tunnel1Address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Address"></a>

```typescript
public readonly tunnel1Address: string;
```

- *Type:* string

---

##### `tunnel1BgpAsn`<sup>Required</sup> <a name="tunnel1BgpAsn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpAsn"></a>

```typescript
public readonly tunnel1BgpAsn: string;
```

- *Type:* string

---

##### `tunnel1BgpHoldtime`<sup>Required</sup> <a name="tunnel1BgpHoldtime" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpHoldtime"></a>

```typescript
public readonly tunnel1BgpHoldtime: number;
```

- *Type:* number

---

##### `tunnel1CgwInsideAddress`<sup>Required</sup> <a name="tunnel1CgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1CgwInsideAddress"></a>

```typescript
public readonly tunnel1CgwInsideAddress: string;
```

- *Type:* string

---

##### `tunnel1LogOptions`<sup>Required</sup> <a name="tunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptions"></a>

```typescript
public readonly tunnel1LogOptions: VpnConnectionTunnel1LogOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference">VpnConnectionTunnel1LogOptionsOutputReference</a>

---

##### `tunnel1VgwInsideAddress`<sup>Required</sup> <a name="tunnel1VgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1VgwInsideAddress"></a>

```typescript
public readonly tunnel1VgwInsideAddress: string;
```

- *Type:* string

---

##### `tunnel2Address`<sup>Required</sup> <a name="tunnel2Address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Address"></a>

```typescript
public readonly tunnel2Address: string;
```

- *Type:* string

---

##### `tunnel2BgpAsn`<sup>Required</sup> <a name="tunnel2BgpAsn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpAsn"></a>

```typescript
public readonly tunnel2BgpAsn: string;
```

- *Type:* string

---

##### `tunnel2BgpHoldtime`<sup>Required</sup> <a name="tunnel2BgpHoldtime" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpHoldtime"></a>

```typescript
public readonly tunnel2BgpHoldtime: number;
```

- *Type:* number

---

##### `tunnel2CgwInsideAddress`<sup>Required</sup> <a name="tunnel2CgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2CgwInsideAddress"></a>

```typescript
public readonly tunnel2CgwInsideAddress: string;
```

- *Type:* string

---

##### `tunnel2LogOptions`<sup>Required</sup> <a name="tunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptions"></a>

```typescript
public readonly tunnel2LogOptions: VpnConnectionTunnel2LogOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference">VpnConnectionTunnel2LogOptionsOutputReference</a>

---

##### `tunnel2VgwInsideAddress`<sup>Required</sup> <a name="tunnel2VgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2VgwInsideAddress"></a>

```typescript
public readonly tunnel2VgwInsideAddress: string;
```

- *Type:* string

---

##### `vgwTelemetry`<sup>Required</sup> <a name="vgwTelemetry" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vgwTelemetry"></a>

```typescript
public readonly vgwTelemetry: VpnConnectionVgwTelemetryList;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList">VpnConnectionVgwTelemetryList</a>

---

##### `customerGatewayIdInput`<sup>Optional</sup> <a name="customerGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayIdInput"></a>

```typescript
public readonly customerGatewayIdInput: string;
```

- *Type:* string

---

##### `enableAccelerationInput`<sup>Optional</sup> <a name="enableAccelerationInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAccelerationInput"></a>

```typescript
public readonly enableAccelerationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localIpv4NetworkCidrInput`<sup>Optional</sup> <a name="localIpv4NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidrInput"></a>

```typescript
public readonly localIpv4NetworkCidrInput: string;
```

- *Type:* string

---

##### `localIpv6NetworkCidrInput`<sup>Optional</sup> <a name="localIpv6NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidrInput"></a>

```typescript
public readonly localIpv6NetworkCidrInput: string;
```

- *Type:* string

---

##### `outsideIpAddressTypeInput`<sup>Optional</sup> <a name="outsideIpAddressTypeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressTypeInput"></a>

```typescript
public readonly outsideIpAddressTypeInput: string;
```

- *Type:* string

---

##### `remoteIpv4NetworkCidrInput`<sup>Optional</sup> <a name="remoteIpv4NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidrInput"></a>

```typescript
public readonly remoteIpv4NetworkCidrInput: string;
```

- *Type:* string

---

##### `remoteIpv6NetworkCidrInput`<sup>Optional</sup> <a name="remoteIpv6NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidrInput"></a>

```typescript
public readonly remoteIpv6NetworkCidrInput: string;
```

- *Type:* string

---

##### `staticRoutesOnlyInput`<sup>Optional</sup> <a name="staticRoutesOnlyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnlyInput"></a>

```typescript
public readonly staticRoutesOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `transportTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transportTransitGatewayAttachmentIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentIdInput"></a>

```typescript
public readonly transportTransitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `tunnel1DpdTimeoutActionInput`<sup>Optional</sup> <a name="tunnel1DpdTimeoutActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutActionInput"></a>

```typescript
public readonly tunnel1DpdTimeoutActionInput: string;
```

- *Type:* string

---

##### `tunnel1DpdTimeoutSecondsInput`<sup>Optional</sup> <a name="tunnel1DpdTimeoutSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSecondsInput"></a>

```typescript
public readonly tunnel1DpdTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `tunnel1IkeVersionsInput`<sup>Optional</sup> <a name="tunnel1IkeVersionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersionsInput"></a>

```typescript
public readonly tunnel1IkeVersionsInput: string[];
```

- *Type:* string[]

---

##### `tunnel1InsideCidrInput`<sup>Optional</sup> <a name="tunnel1InsideCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidrInput"></a>

```typescript
public readonly tunnel1InsideCidrInput: string;
```

- *Type:* string

---

##### `tunnel1InsideIpv6CidrInput`<sup>Optional</sup> <a name="tunnel1InsideIpv6CidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6CidrInput"></a>

```typescript
public readonly tunnel1InsideIpv6CidrInput: string;
```

- *Type:* string

---

##### `tunnel1LogOptionsInput`<sup>Optional</sup> <a name="tunnel1LogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptionsInput"></a>

```typescript
public readonly tunnel1LogOptionsInput: VpnConnectionTunnel1LogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---

##### `tunnel1Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="tunnel1Phase1DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbersInput"></a>

```typescript
public readonly tunnel1Phase1DhGroupNumbersInput: number[];
```

- *Type:* number[]

---

##### `tunnel1Phase1EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="tunnel1Phase1EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithmsInput"></a>

```typescript
public readonly tunnel1Phase1EncryptionAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `tunnel1Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="tunnel1Phase1IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithmsInput"></a>

```typescript
public readonly tunnel1Phase1IntegrityAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `tunnel1Phase1LifetimeSecondsInput`<sup>Optional</sup> <a name="tunnel1Phase1LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSecondsInput"></a>

```typescript
public readonly tunnel1Phase1LifetimeSecondsInput: number;
```

- *Type:* number

---

##### `tunnel1Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="tunnel1Phase2DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbersInput"></a>

```typescript
public readonly tunnel1Phase2DhGroupNumbersInput: number[];
```

- *Type:* number[]

---

##### `tunnel1Phase2EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="tunnel1Phase2EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithmsInput"></a>

```typescript
public readonly tunnel1Phase2EncryptionAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `tunnel1Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="tunnel1Phase2IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithmsInput"></a>

```typescript
public readonly tunnel1Phase2IntegrityAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `tunnel1Phase2LifetimeSecondsInput`<sup>Optional</sup> <a name="tunnel1Phase2LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSecondsInput"></a>

```typescript
public readonly tunnel1Phase2LifetimeSecondsInput: number;
```

- *Type:* number

---

##### `tunnel1PresharedKeyInput`<sup>Optional</sup> <a name="tunnel1PresharedKeyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKeyInput"></a>

```typescript
public readonly tunnel1PresharedKeyInput: string;
```

- *Type:* string

---

##### `tunnel1RekeyFuzzPercentageInput`<sup>Optional</sup> <a name="tunnel1RekeyFuzzPercentageInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentageInput"></a>

```typescript
public readonly tunnel1RekeyFuzzPercentageInput: number;
```

- *Type:* number

---

##### `tunnel1RekeyMarginTimeSecondsInput`<sup>Optional</sup> <a name="tunnel1RekeyMarginTimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSecondsInput"></a>

```typescript
public readonly tunnel1RekeyMarginTimeSecondsInput: number;
```

- *Type:* number

---

##### `tunnel1ReplayWindowSizeInput`<sup>Optional</sup> <a name="tunnel1ReplayWindowSizeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSizeInput"></a>

```typescript
public readonly tunnel1ReplayWindowSizeInput: number;
```

- *Type:* number

---

##### `tunnel1StartupActionInput`<sup>Optional</sup> <a name="tunnel1StartupActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupActionInput"></a>

```typescript
public readonly tunnel1StartupActionInput: string;
```

- *Type:* string

---

##### `tunnel2DpdTimeoutActionInput`<sup>Optional</sup> <a name="tunnel2DpdTimeoutActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutActionInput"></a>

```typescript
public readonly tunnel2DpdTimeoutActionInput: string;
```

- *Type:* string

---

##### `tunnel2DpdTimeoutSecondsInput`<sup>Optional</sup> <a name="tunnel2DpdTimeoutSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSecondsInput"></a>

```typescript
public readonly tunnel2DpdTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `tunnel2IkeVersionsInput`<sup>Optional</sup> <a name="tunnel2IkeVersionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersionsInput"></a>

```typescript
public readonly tunnel2IkeVersionsInput: string[];
```

- *Type:* string[]

---

##### `tunnel2InsideCidrInput`<sup>Optional</sup> <a name="tunnel2InsideCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidrInput"></a>

```typescript
public readonly tunnel2InsideCidrInput: string;
```

- *Type:* string

---

##### `tunnel2InsideIpv6CidrInput`<sup>Optional</sup> <a name="tunnel2InsideIpv6CidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6CidrInput"></a>

```typescript
public readonly tunnel2InsideIpv6CidrInput: string;
```

- *Type:* string

---

##### `tunnel2LogOptionsInput`<sup>Optional</sup> <a name="tunnel2LogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptionsInput"></a>

```typescript
public readonly tunnel2LogOptionsInput: VpnConnectionTunnel2LogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---

##### `tunnel2Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="tunnel2Phase1DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbersInput"></a>

```typescript
public readonly tunnel2Phase1DhGroupNumbersInput: number[];
```

- *Type:* number[]

---

##### `tunnel2Phase1EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="tunnel2Phase1EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithmsInput"></a>

```typescript
public readonly tunnel2Phase1EncryptionAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `tunnel2Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="tunnel2Phase1IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithmsInput"></a>

```typescript
public readonly tunnel2Phase1IntegrityAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `tunnel2Phase1LifetimeSecondsInput`<sup>Optional</sup> <a name="tunnel2Phase1LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSecondsInput"></a>

```typescript
public readonly tunnel2Phase1LifetimeSecondsInput: number;
```

- *Type:* number

---

##### `tunnel2Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="tunnel2Phase2DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbersInput"></a>

```typescript
public readonly tunnel2Phase2DhGroupNumbersInput: number[];
```

- *Type:* number[]

---

##### `tunnel2Phase2EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="tunnel2Phase2EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithmsInput"></a>

```typescript
public readonly tunnel2Phase2EncryptionAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `tunnel2Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="tunnel2Phase2IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithmsInput"></a>

```typescript
public readonly tunnel2Phase2IntegrityAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `tunnel2Phase2LifetimeSecondsInput`<sup>Optional</sup> <a name="tunnel2Phase2LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSecondsInput"></a>

```typescript
public readonly tunnel2Phase2LifetimeSecondsInput: number;
```

- *Type:* number

---

##### `tunnel2PresharedKeyInput`<sup>Optional</sup> <a name="tunnel2PresharedKeyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKeyInput"></a>

```typescript
public readonly tunnel2PresharedKeyInput: string;
```

- *Type:* string

---

##### `tunnel2RekeyFuzzPercentageInput`<sup>Optional</sup> <a name="tunnel2RekeyFuzzPercentageInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentageInput"></a>

```typescript
public readonly tunnel2RekeyFuzzPercentageInput: number;
```

- *Type:* number

---

##### `tunnel2RekeyMarginTimeSecondsInput`<sup>Optional</sup> <a name="tunnel2RekeyMarginTimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSecondsInput"></a>

```typescript
public readonly tunnel2RekeyMarginTimeSecondsInput: number;
```

- *Type:* number

---

##### `tunnel2ReplayWindowSizeInput`<sup>Optional</sup> <a name="tunnel2ReplayWindowSizeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSizeInput"></a>

```typescript
public readonly tunnel2ReplayWindowSizeInput: number;
```

- *Type:* number

---

##### `tunnel2StartupActionInput`<sup>Optional</sup> <a name="tunnel2StartupActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupActionInput"></a>

```typescript
public readonly tunnel2StartupActionInput: string;
```

- *Type:* string

---

##### `tunnelInsideIpVersionInput`<sup>Optional</sup> <a name="tunnelInsideIpVersionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersionInput"></a>

```typescript
public readonly tunnelInsideIpVersionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpnGatewayIdInput`<sup>Optional</sup> <a name="vpnGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayIdInput"></a>

```typescript
public readonly vpnGatewayIdInput: string;
```

- *Type:* string

---

##### `customerGatewayId`<sup>Required</sup> <a name="customerGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayId"></a>

```typescript
public readonly customerGatewayId: string;
```

- *Type:* string

---

##### `enableAcceleration`<sup>Required</sup> <a name="enableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAcceleration"></a>

```typescript
public readonly enableAcceleration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localIpv4NetworkCidr`<sup>Required</sup> <a name="localIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidr"></a>

```typescript
public readonly localIpv4NetworkCidr: string;
```

- *Type:* string

---

##### `localIpv6NetworkCidr`<sup>Required</sup> <a name="localIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidr"></a>

```typescript
public readonly localIpv6NetworkCidr: string;
```

- *Type:* string

---

##### `outsideIpAddressType`<sup>Required</sup> <a name="outsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressType"></a>

```typescript
public readonly outsideIpAddressType: string;
```

- *Type:* string

---

##### `remoteIpv4NetworkCidr`<sup>Required</sup> <a name="remoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidr"></a>

```typescript
public readonly remoteIpv4NetworkCidr: string;
```

- *Type:* string

---

##### `remoteIpv6NetworkCidr`<sup>Required</sup> <a name="remoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidr"></a>

```typescript
public readonly remoteIpv6NetworkCidr: string;
```

- *Type:* string

---

##### `staticRoutesOnly`<sup>Required</sup> <a name="staticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnly"></a>

```typescript
public readonly staticRoutesOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `transportTransitGatewayAttachmentId`<sup>Required</sup> <a name="transportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentId"></a>

```typescript
public readonly transportTransitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `tunnel1DpdTimeoutAction`<sup>Required</sup> <a name="tunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutAction"></a>

```typescript
public readonly tunnel1DpdTimeoutAction: string;
```

- *Type:* string

---

##### `tunnel1DpdTimeoutSeconds`<sup>Required</sup> <a name="tunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSeconds"></a>

```typescript
public readonly tunnel1DpdTimeoutSeconds: number;
```

- *Type:* number

---

##### `tunnel1IkeVersions`<sup>Required</sup> <a name="tunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersions"></a>

```typescript
public readonly tunnel1IkeVersions: string[];
```

- *Type:* string[]

---

##### `tunnel1InsideCidr`<sup>Required</sup> <a name="tunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidr"></a>

```typescript
public readonly tunnel1InsideCidr: string;
```

- *Type:* string

---

##### `tunnel1InsideIpv6Cidr`<sup>Required</sup> <a name="tunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6Cidr"></a>

```typescript
public readonly tunnel1InsideIpv6Cidr: string;
```

- *Type:* string

---

##### `tunnel1Phase1DhGroupNumbers`<sup>Required</sup> <a name="tunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbers"></a>

```typescript
public readonly tunnel1Phase1DhGroupNumbers: number[];
```

- *Type:* number[]

---

##### `tunnel1Phase1EncryptionAlgorithms`<sup>Required</sup> <a name="tunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithms"></a>

```typescript
public readonly tunnel1Phase1EncryptionAlgorithms: string[];
```

- *Type:* string[]

---

##### `tunnel1Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="tunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithms"></a>

```typescript
public readonly tunnel1Phase1IntegrityAlgorithms: string[];
```

- *Type:* string[]

---

##### `tunnel1Phase1LifetimeSeconds`<sup>Required</sup> <a name="tunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSeconds"></a>

```typescript
public readonly tunnel1Phase1LifetimeSeconds: number;
```

- *Type:* number

---

##### `tunnel1Phase2DhGroupNumbers`<sup>Required</sup> <a name="tunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbers"></a>

```typescript
public readonly tunnel1Phase2DhGroupNumbers: number[];
```

- *Type:* number[]

---

##### `tunnel1Phase2EncryptionAlgorithms`<sup>Required</sup> <a name="tunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithms"></a>

```typescript
public readonly tunnel1Phase2EncryptionAlgorithms: string[];
```

- *Type:* string[]

---

##### `tunnel1Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="tunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithms"></a>

```typescript
public readonly tunnel1Phase2IntegrityAlgorithms: string[];
```

- *Type:* string[]

---

##### `tunnel1Phase2LifetimeSeconds`<sup>Required</sup> <a name="tunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSeconds"></a>

```typescript
public readonly tunnel1Phase2LifetimeSeconds: number;
```

- *Type:* number

---

##### `tunnel1PresharedKey`<sup>Required</sup> <a name="tunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKey"></a>

```typescript
public readonly tunnel1PresharedKey: string;
```

- *Type:* string

---

##### `tunnel1RekeyFuzzPercentage`<sup>Required</sup> <a name="tunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentage"></a>

```typescript
public readonly tunnel1RekeyFuzzPercentage: number;
```

- *Type:* number

---

##### `tunnel1RekeyMarginTimeSeconds`<sup>Required</sup> <a name="tunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSeconds"></a>

```typescript
public readonly tunnel1RekeyMarginTimeSeconds: number;
```

- *Type:* number

---

##### `tunnel1ReplayWindowSize`<sup>Required</sup> <a name="tunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSize"></a>

```typescript
public readonly tunnel1ReplayWindowSize: number;
```

- *Type:* number

---

##### `tunnel1StartupAction`<sup>Required</sup> <a name="tunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupAction"></a>

```typescript
public readonly tunnel1StartupAction: string;
```

- *Type:* string

---

##### `tunnel2DpdTimeoutAction`<sup>Required</sup> <a name="tunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutAction"></a>

```typescript
public readonly tunnel2DpdTimeoutAction: string;
```

- *Type:* string

---

##### `tunnel2DpdTimeoutSeconds`<sup>Required</sup> <a name="tunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSeconds"></a>

```typescript
public readonly tunnel2DpdTimeoutSeconds: number;
```

- *Type:* number

---

##### `tunnel2IkeVersions`<sup>Required</sup> <a name="tunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersions"></a>

```typescript
public readonly tunnel2IkeVersions: string[];
```

- *Type:* string[]

---

##### `tunnel2InsideCidr`<sup>Required</sup> <a name="tunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidr"></a>

```typescript
public readonly tunnel2InsideCidr: string;
```

- *Type:* string

---

##### `tunnel2InsideIpv6Cidr`<sup>Required</sup> <a name="tunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6Cidr"></a>

```typescript
public readonly tunnel2InsideIpv6Cidr: string;
```

- *Type:* string

---

##### `tunnel2Phase1DhGroupNumbers`<sup>Required</sup> <a name="tunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbers"></a>

```typescript
public readonly tunnel2Phase1DhGroupNumbers: number[];
```

- *Type:* number[]

---

##### `tunnel2Phase1EncryptionAlgorithms`<sup>Required</sup> <a name="tunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithms"></a>

```typescript
public readonly tunnel2Phase1EncryptionAlgorithms: string[];
```

- *Type:* string[]

---

##### `tunnel2Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="tunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithms"></a>

```typescript
public readonly tunnel2Phase1IntegrityAlgorithms: string[];
```

- *Type:* string[]

---

##### `tunnel2Phase1LifetimeSeconds`<sup>Required</sup> <a name="tunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSeconds"></a>

```typescript
public readonly tunnel2Phase1LifetimeSeconds: number;
```

- *Type:* number

---

##### `tunnel2Phase2DhGroupNumbers`<sup>Required</sup> <a name="tunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbers"></a>

```typescript
public readonly tunnel2Phase2DhGroupNumbers: number[];
```

- *Type:* number[]

---

##### `tunnel2Phase2EncryptionAlgorithms`<sup>Required</sup> <a name="tunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithms"></a>

```typescript
public readonly tunnel2Phase2EncryptionAlgorithms: string[];
```

- *Type:* string[]

---

##### `tunnel2Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="tunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithms"></a>

```typescript
public readonly tunnel2Phase2IntegrityAlgorithms: string[];
```

- *Type:* string[]

---

##### `tunnel2Phase2LifetimeSeconds`<sup>Required</sup> <a name="tunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSeconds"></a>

```typescript
public readonly tunnel2Phase2LifetimeSeconds: number;
```

- *Type:* number

---

##### `tunnel2PresharedKey`<sup>Required</sup> <a name="tunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKey"></a>

```typescript
public readonly tunnel2PresharedKey: string;
```

- *Type:* string

---

##### `tunnel2RekeyFuzzPercentage`<sup>Required</sup> <a name="tunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentage"></a>

```typescript
public readonly tunnel2RekeyFuzzPercentage: number;
```

- *Type:* number

---

##### `tunnel2RekeyMarginTimeSeconds`<sup>Required</sup> <a name="tunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSeconds"></a>

```typescript
public readonly tunnel2RekeyMarginTimeSeconds: number;
```

- *Type:* number

---

##### `tunnel2ReplayWindowSize`<sup>Required</sup> <a name="tunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSize"></a>

```typescript
public readonly tunnel2ReplayWindowSize: number;
```

- *Type:* number

---

##### `tunnel2StartupAction`<sup>Required</sup> <a name="tunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupAction"></a>

```typescript
public readonly tunnel2StartupAction: string;
```

- *Type:* string

---

##### `tunnelInsideIpVersion`<sup>Required</sup> <a name="tunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersion"></a>

```typescript
public readonly tunnelInsideIpVersion: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnConnectionConfig <a name="VpnConnectionConfig" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

const vpnConnectionConfig: vpnConnection.VpnConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.customerGatewayId">customerGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.enableAcceleration">enableAcceleration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv4NetworkCidr">localIpv4NetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv6NetworkCidr">localIpv6NetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.outsideIpAddressType">outsideIpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv4NetworkCidr">remoteIpv4NetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv6NetworkCidr">remoteIpv6NetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.staticRoutesOnly">staticRoutesOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transportTransitGatewayAttachmentId">transportTransitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutAction">tunnel1DpdTimeoutAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutSeconds">tunnel1DpdTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1IkeVersions">tunnel1IkeVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideCidr">tunnel1InsideCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideIpv6Cidr">tunnel1InsideIpv6Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1LogOptions">tunnel1LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | tunnel1_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1DhGroupNumbers">tunnel1Phase1DhGroupNumbers</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1EncryptionAlgorithms">tunnel1Phase1EncryptionAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1IntegrityAlgorithms">tunnel1Phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1LifetimeSeconds">tunnel1Phase1LifetimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2DhGroupNumbers">tunnel1Phase2DhGroupNumbers</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2EncryptionAlgorithms">tunnel1Phase2EncryptionAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2IntegrityAlgorithms">tunnel1Phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2LifetimeSeconds">tunnel1Phase2LifetimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1PresharedKey">tunnel1PresharedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyFuzzPercentage">tunnel1RekeyFuzzPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyMarginTimeSeconds">tunnel1RekeyMarginTimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1ReplayWindowSize">tunnel1ReplayWindowSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1StartupAction">tunnel1StartupAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutAction">tunnel2DpdTimeoutAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutSeconds">tunnel2DpdTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2IkeVersions">tunnel2IkeVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideCidr">tunnel2InsideCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideIpv6Cidr">tunnel2InsideIpv6Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2LogOptions">tunnel2LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | tunnel2_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1DhGroupNumbers">tunnel2Phase1DhGroupNumbers</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1EncryptionAlgorithms">tunnel2Phase1EncryptionAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1IntegrityAlgorithms">tunnel2Phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1LifetimeSeconds">tunnel2Phase1LifetimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2DhGroupNumbers">tunnel2Phase2DhGroupNumbers</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2EncryptionAlgorithms">tunnel2Phase2EncryptionAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2IntegrityAlgorithms">tunnel2Phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2LifetimeSeconds">tunnel2Phase2LifetimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2PresharedKey">tunnel2PresharedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyFuzzPercentage">tunnel2RekeyFuzzPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyMarginTimeSeconds">tunnel2RekeyMarginTimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2ReplayWindowSize">tunnel2ReplayWindowSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2StartupAction">tunnel2StartupAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnelInsideIpVersion">tunnelInsideIpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerGatewayId`<sup>Required</sup> <a name="customerGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.customerGatewayId"></a>

```typescript
public readonly customerGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}.

---

##### `enableAcceleration`<sup>Optional</sup> <a name="enableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.enableAcceleration"></a>

```typescript
public readonly enableAcceleration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localIpv4NetworkCidr`<sup>Optional</sup> <a name="localIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv4NetworkCidr"></a>

```typescript
public readonly localIpv4NetworkCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}.

---

##### `localIpv6NetworkCidr`<sup>Optional</sup> <a name="localIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv6NetworkCidr"></a>

```typescript
public readonly localIpv6NetworkCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}.

---

##### `outsideIpAddressType`<sup>Optional</sup> <a name="outsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.outsideIpAddressType"></a>

```typescript
public readonly outsideIpAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}.

---

##### `remoteIpv4NetworkCidr`<sup>Optional</sup> <a name="remoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv4NetworkCidr"></a>

```typescript
public readonly remoteIpv4NetworkCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}.

---

##### `remoteIpv6NetworkCidr`<sup>Optional</sup> <a name="remoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv6NetworkCidr"></a>

```typescript
public readonly remoteIpv6NetworkCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}.

---

##### `staticRoutesOnly`<sup>Optional</sup> <a name="staticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.staticRoutesOnly"></a>

```typescript
public readonly staticRoutesOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}.

---

##### `transportTransitGatewayAttachmentId`<sup>Optional</sup> <a name="transportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transportTransitGatewayAttachmentId"></a>

```typescript
public readonly transportTransitGatewayAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}.

---

##### `tunnel1DpdTimeoutAction`<sup>Optional</sup> <a name="tunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutAction"></a>

```typescript
public readonly tunnel1DpdTimeoutAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}.

---

##### `tunnel1DpdTimeoutSeconds`<sup>Optional</sup> <a name="tunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutSeconds"></a>

```typescript
public readonly tunnel1DpdTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}.

---

##### `tunnel1IkeVersions`<sup>Optional</sup> <a name="tunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1IkeVersions"></a>

```typescript
public readonly tunnel1IkeVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}.

---

##### `tunnel1InsideCidr`<sup>Optional</sup> <a name="tunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideCidr"></a>

```typescript
public readonly tunnel1InsideCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}.

---

##### `tunnel1InsideIpv6Cidr`<sup>Optional</sup> <a name="tunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideIpv6Cidr"></a>

```typescript
public readonly tunnel1InsideIpv6Cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}.

---

##### `tunnel1LogOptions`<sup>Optional</sup> <a name="tunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1LogOptions"></a>

```typescript
public readonly tunnel1LogOptions: VpnConnectionTunnel1LogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

tunnel1_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_log_options VpnConnection#tunnel1_log_options}

---

##### `tunnel1Phase1DhGroupNumbers`<sup>Optional</sup> <a name="tunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1DhGroupNumbers"></a>

```typescript
public readonly tunnel1Phase1DhGroupNumbers: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}.

---

##### `tunnel1Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1EncryptionAlgorithms"></a>

```typescript
public readonly tunnel1Phase1EncryptionAlgorithms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}.

---

##### `tunnel1Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1IntegrityAlgorithms"></a>

```typescript
public readonly tunnel1Phase1IntegrityAlgorithms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}.

---

##### `tunnel1Phase1LifetimeSeconds`<sup>Optional</sup> <a name="tunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1LifetimeSeconds"></a>

```typescript
public readonly tunnel1Phase1LifetimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}.

---

##### `tunnel1Phase2DhGroupNumbers`<sup>Optional</sup> <a name="tunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2DhGroupNumbers"></a>

```typescript
public readonly tunnel1Phase2DhGroupNumbers: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}.

---

##### `tunnel1Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2EncryptionAlgorithms"></a>

```typescript
public readonly tunnel1Phase2EncryptionAlgorithms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}.

---

##### `tunnel1Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2IntegrityAlgorithms"></a>

```typescript
public readonly tunnel1Phase2IntegrityAlgorithms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}.

---

##### `tunnel1Phase2LifetimeSeconds`<sup>Optional</sup> <a name="tunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2LifetimeSeconds"></a>

```typescript
public readonly tunnel1Phase2LifetimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}.

---

##### `tunnel1PresharedKey`<sup>Optional</sup> <a name="tunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1PresharedKey"></a>

```typescript
public readonly tunnel1PresharedKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}.

---

##### `tunnel1RekeyFuzzPercentage`<sup>Optional</sup> <a name="tunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyFuzzPercentage"></a>

```typescript
public readonly tunnel1RekeyFuzzPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}.

---

##### `tunnel1RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="tunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyMarginTimeSeconds"></a>

```typescript
public readonly tunnel1RekeyMarginTimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}.

---

##### `tunnel1ReplayWindowSize`<sup>Optional</sup> <a name="tunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1ReplayWindowSize"></a>

```typescript
public readonly tunnel1ReplayWindowSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}.

---

##### `tunnel1StartupAction`<sup>Optional</sup> <a name="tunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1StartupAction"></a>

```typescript
public readonly tunnel1StartupAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}.

---

##### `tunnel2DpdTimeoutAction`<sup>Optional</sup> <a name="tunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutAction"></a>

```typescript
public readonly tunnel2DpdTimeoutAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}.

---

##### `tunnel2DpdTimeoutSeconds`<sup>Optional</sup> <a name="tunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutSeconds"></a>

```typescript
public readonly tunnel2DpdTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}.

---

##### `tunnel2IkeVersions`<sup>Optional</sup> <a name="tunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2IkeVersions"></a>

```typescript
public readonly tunnel2IkeVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}.

---

##### `tunnel2InsideCidr`<sup>Optional</sup> <a name="tunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideCidr"></a>

```typescript
public readonly tunnel2InsideCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}.

---

##### `tunnel2InsideIpv6Cidr`<sup>Optional</sup> <a name="tunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideIpv6Cidr"></a>

```typescript
public readonly tunnel2InsideIpv6Cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}.

---

##### `tunnel2LogOptions`<sup>Optional</sup> <a name="tunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2LogOptions"></a>

```typescript
public readonly tunnel2LogOptions: VpnConnectionTunnel2LogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

tunnel2_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_log_options VpnConnection#tunnel2_log_options}

---

##### `tunnel2Phase1DhGroupNumbers`<sup>Optional</sup> <a name="tunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1DhGroupNumbers"></a>

```typescript
public readonly tunnel2Phase1DhGroupNumbers: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}.

---

##### `tunnel2Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1EncryptionAlgorithms"></a>

```typescript
public readonly tunnel2Phase1EncryptionAlgorithms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}.

---

##### `tunnel2Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1IntegrityAlgorithms"></a>

```typescript
public readonly tunnel2Phase1IntegrityAlgorithms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}.

---

##### `tunnel2Phase1LifetimeSeconds`<sup>Optional</sup> <a name="tunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1LifetimeSeconds"></a>

```typescript
public readonly tunnel2Phase1LifetimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}.

---

##### `tunnel2Phase2DhGroupNumbers`<sup>Optional</sup> <a name="tunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2DhGroupNumbers"></a>

```typescript
public readonly tunnel2Phase2DhGroupNumbers: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}.

---

##### `tunnel2Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2EncryptionAlgorithms"></a>

```typescript
public readonly tunnel2Phase2EncryptionAlgorithms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}.

---

##### `tunnel2Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2IntegrityAlgorithms"></a>

```typescript
public readonly tunnel2Phase2IntegrityAlgorithms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}.

---

##### `tunnel2Phase2LifetimeSeconds`<sup>Optional</sup> <a name="tunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2LifetimeSeconds"></a>

```typescript
public readonly tunnel2Phase2LifetimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}.

---

##### `tunnel2PresharedKey`<sup>Optional</sup> <a name="tunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2PresharedKey"></a>

```typescript
public readonly tunnel2PresharedKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}.

---

##### `tunnel2RekeyFuzzPercentage`<sup>Optional</sup> <a name="tunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyFuzzPercentage"></a>

```typescript
public readonly tunnel2RekeyFuzzPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}.

---

##### `tunnel2RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="tunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyMarginTimeSeconds"></a>

```typescript
public readonly tunnel2RekeyMarginTimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}.

---

##### `tunnel2ReplayWindowSize`<sup>Optional</sup> <a name="tunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2ReplayWindowSize"></a>

```typescript
public readonly tunnel2ReplayWindowSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}.

---

##### `tunnel2StartupAction`<sup>Optional</sup> <a name="tunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2StartupAction"></a>

```typescript
public readonly tunnel2StartupAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}.

---

##### `tunnelInsideIpVersion`<sup>Optional</sup> <a name="tunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnelInsideIpVersion"></a>

```typescript
public readonly tunnelInsideIpVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}.

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}.

---

### VpnConnectionRoutes <a name="VpnConnectionRoutes" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

const vpnConnectionRoutes: vpnConnection.VpnConnectionRoutes = { ... }
```


### VpnConnectionTunnel1LogOptions <a name="VpnConnectionTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

const vpnConnectionTunnel1LogOptions: vpnConnection.VpnConnectionTunnel1LogOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.property.cloudwatchLogOptions">cloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | cloudwatch_log_options block. |

---

##### `cloudwatchLogOptions`<sup>Optional</sup> <a name="cloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.property.cloudwatchLogOptions"></a>

```typescript
public readonly cloudwatchLogOptions: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

### VpnConnectionTunnel1LogOptionsCloudwatchLogOptions <a name="VpnConnectionTunnel1LogOptionsCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

const vpnConnectionTunnel1LogOptionsCloudwatchLogOptions: vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logEnabled">logEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logOutputFormat">logOutputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}. |

---

##### `logEnabled`<sup>Optional</sup> <a name="logEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```typescript
public readonly logEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

##### `logOutputFormat`<sup>Optional</sup> <a name="logOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```typescript
public readonly logOutputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

### VpnConnectionTunnel2LogOptions <a name="VpnConnectionTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

const vpnConnectionTunnel2LogOptions: vpnConnection.VpnConnectionTunnel2LogOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.property.cloudwatchLogOptions">cloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | cloudwatch_log_options block. |

---

##### `cloudwatchLogOptions`<sup>Optional</sup> <a name="cloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.property.cloudwatchLogOptions"></a>

```typescript
public readonly cloudwatchLogOptions: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

### VpnConnectionTunnel2LogOptionsCloudwatchLogOptions <a name="VpnConnectionTunnel2LogOptionsCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

const vpnConnectionTunnel2LogOptionsCloudwatchLogOptions: vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logEnabled">logEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logOutputFormat">logOutputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}. |

---

##### `logEnabled`<sup>Optional</sup> <a name="logEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```typescript
public readonly logEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

##### `logOutputFormat`<sup>Optional</sup> <a name="logOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```typescript
public readonly logOutputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

### VpnConnectionVgwTelemetry <a name="VpnConnectionVgwTelemetry" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

const vpnConnectionVgwTelemetry: vpnConnection.VpnConnectionVgwTelemetry = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### VpnConnectionRoutesList <a name="VpnConnectionRoutesList" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

new vpnConnection.VpnConnectionRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get"></a>

```typescript
public get(index: number): VpnConnectionRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VpnConnectionRoutesOutputReference <a name="VpnConnectionRoutesOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

new vpnConnection.VpnConnectionRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes">VpnConnectionRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnConnectionRoutes;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes">VpnConnectionRoutes</a>

---


### VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference <a name="VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

new vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogEnabled` <a name="resetLogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```typescript
public resetLogEnabled(): void
```

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```typescript
public resetLogGroupArn(): void
```

##### `resetLogOutputFormat` <a name="resetLogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```typescript
public resetLogOutputFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">logEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">logOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">logEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">logOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logEnabledInput`<sup>Optional</sup> <a name="logEnabledInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```typescript
public readonly logEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `logOutputFormatInput`<sup>Optional</sup> <a name="logOutputFormatInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```typescript
public readonly logOutputFormatInput: string;
```

- *Type:* string

---

##### `logEnabled`<sup>Required</sup> <a name="logEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```typescript
public readonly logEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `logOutputFormat`<sup>Required</sup> <a name="logOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```typescript
public readonly logOutputFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---


### VpnConnectionTunnel1LogOptionsOutputReference <a name="VpnConnectionTunnel1LogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

new vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogOptions` <a name="putCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions"></a>

```typescript
public putCloudwatchLogOptions(value: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---

##### `resetCloudwatchLogOptions` <a name="resetCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```typescript
public resetCloudwatchLogOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptions">cloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptionsInput">cloudwatchLogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogOptions`<sup>Required</sup> <a name="cloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```typescript
public readonly cloudwatchLogOptions: VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `cloudwatchLogOptionsInput`<sup>Optional</sup> <a name="cloudwatchLogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```typescript
public readonly cloudwatchLogOptionsInput: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnConnectionTunnel1LogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---


### VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference <a name="VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

new vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogEnabled` <a name="resetLogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```typescript
public resetLogEnabled(): void
```

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```typescript
public resetLogGroupArn(): void
```

##### `resetLogOutputFormat` <a name="resetLogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```typescript
public resetLogOutputFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">logEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">logOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">logEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">logOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logEnabledInput`<sup>Optional</sup> <a name="logEnabledInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```typescript
public readonly logEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `logOutputFormatInput`<sup>Optional</sup> <a name="logOutputFormatInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```typescript
public readonly logOutputFormatInput: string;
```

- *Type:* string

---

##### `logEnabled`<sup>Required</sup> <a name="logEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```typescript
public readonly logEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `logOutputFormat`<sup>Required</sup> <a name="logOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```typescript
public readonly logOutputFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---


### VpnConnectionTunnel2LogOptionsOutputReference <a name="VpnConnectionTunnel2LogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

new vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogOptions` <a name="putCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions"></a>

```typescript
public putCloudwatchLogOptions(value: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---

##### `resetCloudwatchLogOptions` <a name="resetCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```typescript
public resetCloudwatchLogOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptions">cloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptionsInput">cloudwatchLogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogOptions`<sup>Required</sup> <a name="cloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```typescript
public readonly cloudwatchLogOptions: VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `cloudwatchLogOptionsInput`<sup>Optional</sup> <a name="cloudwatchLogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```typescript
public readonly cloudwatchLogOptionsInput: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnConnectionTunnel2LogOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---


### VpnConnectionVgwTelemetryList <a name="VpnConnectionVgwTelemetryList" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

new vpnConnection.VpnConnectionVgwTelemetryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get"></a>

```typescript
public get(index: number): VpnConnectionVgwTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VpnConnectionVgwTelemetryOutputReference <a name="VpnConnectionVgwTelemetryOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer"></a>

```typescript
import { vpnConnection } from '@cdktf/provider-aws'

new vpnConnection.VpnConnectionVgwTelemetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.acceptedRouteCount">acceptedRouteCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.lastStatusChange">lastStatusChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.outsideIpAddress">outsideIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry">VpnConnectionVgwTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceptedRouteCount`<sup>Required</sup> <a name="acceptedRouteCount" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.acceptedRouteCount"></a>

```typescript
public readonly acceptedRouteCount: number;
```

- *Type:* number

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `lastStatusChange`<sup>Required</sup> <a name="lastStatusChange" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.lastStatusChange"></a>

```typescript
public readonly lastStatusChange: string;
```

- *Type:* string

---

##### `outsideIpAddress`<sup>Required</sup> <a name="outsideIpAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.outsideIpAddress"></a>

```typescript
public readonly outsideIpAddress: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnConnectionVgwTelemetry;
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry">VpnConnectionVgwTelemetry</a>

---



