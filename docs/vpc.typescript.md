# `vpc` Submodule <a name="`vpc` Submodule" id="@cdktf/provider-aws.vpc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Vpc <a name="Vpc" id="@cdktf/provider-aws.vpc.Vpc"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc aws_vpc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpc.Vpc.Initializer"></a>

```typescript
import { vpc } from '@cdktf/provider-aws'

new vpc.Vpc(scope: Construct, id: string, config?: VpcConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpc.VpcConfig">VpcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpc.VpcConfig">VpcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetAssignGeneratedIpv6CidrBlock">resetAssignGeneratedIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclink">resetEnableClassiclink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclinkDnsSupport">resetEnableClassiclinkDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableDnsHostnames">resetEnableDnsHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableDnsSupport">resetEnableDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableNetworkAddressUsageMetrics">resetEnableNetworkAddressUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetInstanceTenancy">resetInstanceTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv4IpamPoolId">resetIpv4IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv4NetmaskLength">resetIpv4NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlockNetworkBorderGroup">resetIpv6CidrBlockNetworkBorderGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6IpamPoolId">resetIpv6IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6NetmaskLength">resetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpc.Vpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpc.Vpc.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpc.Vpc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpc.Vpc.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpc.Vpc.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpc.Vpc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpc.Vpc.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpc.Vpc.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpc.Vpc.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpc.Vpc.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAssignGeneratedIpv6CidrBlock` <a name="resetAssignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.resetAssignGeneratedIpv6CidrBlock"></a>

```typescript
public resetAssignGeneratedIpv6CidrBlock(): void
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/provider-aws.vpc.Vpc.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetEnableClassiclink` <a name="resetEnableClassiclink" id="@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclink"></a>

```typescript
public resetEnableClassiclink(): void
```

##### `resetEnableClassiclinkDnsSupport` <a name="resetEnableClassiclinkDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclinkDnsSupport"></a>

```typescript
public resetEnableClassiclinkDnsSupport(): void
```

##### `resetEnableDnsHostnames` <a name="resetEnableDnsHostnames" id="@cdktf/provider-aws.vpc.Vpc.resetEnableDnsHostnames"></a>

```typescript
public resetEnableDnsHostnames(): void
```

##### `resetEnableDnsSupport` <a name="resetEnableDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.resetEnableDnsSupport"></a>

```typescript
public resetEnableDnsSupport(): void
```

##### `resetEnableNetworkAddressUsageMetrics` <a name="resetEnableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.vpc.Vpc.resetEnableNetworkAddressUsageMetrics"></a>

```typescript
public resetEnableNetworkAddressUsageMetrics(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpc.Vpc.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceTenancy` <a name="resetInstanceTenancy" id="@cdktf/provider-aws.vpc.Vpc.resetInstanceTenancy"></a>

```typescript
public resetInstanceTenancy(): void
```

##### `resetIpv4IpamPoolId` <a name="resetIpv4IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.resetIpv4IpamPoolId"></a>

```typescript
public resetIpv4IpamPoolId(): void
```

##### `resetIpv4NetmaskLength` <a name="resetIpv4NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.resetIpv4NetmaskLength"></a>

```typescript
public resetIpv4NetmaskLength(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetIpv6CidrBlockNetworkBorderGroup` <a name="resetIpv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlockNetworkBorderGroup"></a>

```typescript
public resetIpv6CidrBlockNetworkBorderGroup(): void
```

##### `resetIpv6IpamPoolId` <a name="resetIpv6IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6IpamPoolId"></a>

```typescript
public resetIpv6IpamPoolId(): void
```

##### `resetIpv6NetmaskLength` <a name="resetIpv6NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6NetmaskLength"></a>

```typescript
public resetIpv6NetmaskLength(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpc.Vpc.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpc.Vpc.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpc.Vpc.isConstruct"></a>

```typescript
import { vpc } from '@cdktf/provider-aws'

vpc.Vpc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpc.Vpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpc.Vpc.isTerraformElement"></a>

```typescript
import { vpc } from '@cdktf/provider-aws'

vpc.Vpc.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpc.Vpc.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpc.Vpc.isTerraformResource"></a>

```typescript
import { vpc } from '@cdktf/provider-aws'

vpc.Vpc.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpc.Vpc.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultNetworkAclId">defaultNetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultRouteTableId">defaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultSecurityGroupId">defaultSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.dhcpOptionsId">dhcpOptionsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6AssociationId">ipv6AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.mainRouteTableId">mainRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlockInput">assignGeneratedIpv6CidrBlockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupportInput">enableClassiclinkDnsSupportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkInput">enableClassiclinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnamesInput">enableDnsHostnamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupportInput">enableDnsSupportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetricsInput">enableNetworkAddressUsageMetricsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.instanceTenancyInput">instanceTenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolIdInput">ipv4IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLengthInput">ipv4NetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroupInput">ipv6CidrBlockNetworkBorderGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolIdInput">ipv6IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLengthInput">ipv6NetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlock">assignGeneratedIpv6CidrBlock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclink">enableClassiclink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupport">enableClassiclinkDnsSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetrics">enableNetworkAddressUsageMetrics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.instanceTenancy">instanceTenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpc.Vpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpc.Vpc.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpc.Vpc.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpc.Vpc.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpc.Vpc.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpc.Vpc.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpc.Vpc.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpc.Vpc.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpc.Vpc.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpc.Vpc.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpc.Vpc.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpc.Vpc.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpc.Vpc.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpc.Vpc.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpc.Vpc.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultNetworkAclId`<sup>Required</sup> <a name="defaultNetworkAclId" id="@cdktf/provider-aws.vpc.Vpc.property.defaultNetworkAclId"></a>

```typescript
public readonly defaultNetworkAclId: string;
```

- *Type:* string

---

##### `defaultRouteTableId`<sup>Required</sup> <a name="defaultRouteTableId" id="@cdktf/provider-aws.vpc.Vpc.property.defaultRouteTableId"></a>

```typescript
public readonly defaultRouteTableId: string;
```

- *Type:* string

---

##### `defaultSecurityGroupId`<sup>Required</sup> <a name="defaultSecurityGroupId" id="@cdktf/provider-aws.vpc.Vpc.property.defaultSecurityGroupId"></a>

```typescript
public readonly defaultSecurityGroupId: string;
```

- *Type:* string

---

##### `dhcpOptionsId`<sup>Required</sup> <a name="dhcpOptionsId" id="@cdktf/provider-aws.vpc.Vpc.property.dhcpOptionsId"></a>

```typescript
public readonly dhcpOptionsId: string;
```

- *Type:* string

---

##### `ipv6AssociationId`<sup>Required</sup> <a name="ipv6AssociationId" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6AssociationId"></a>

```typescript
public readonly ipv6AssociationId: string;
```

- *Type:* string

---

##### `mainRouteTableId`<sup>Required</sup> <a name="mainRouteTableId" id="@cdktf/provider-aws.vpc.Vpc.property.mainRouteTableId"></a>

```typescript
public readonly mainRouteTableId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.vpc.Vpc.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `assignGeneratedIpv6CidrBlockInput`<sup>Optional</sup> <a name="assignGeneratedIpv6CidrBlockInput" id="@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlockInput"></a>

```typescript
public readonly assignGeneratedIpv6CidrBlockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-aws.vpc.Vpc.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `enableClassiclinkDnsSupportInput`<sup>Optional</sup> <a name="enableClassiclinkDnsSupportInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupportInput"></a>

```typescript
public readonly enableClassiclinkDnsSupportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableClassiclinkInput`<sup>Optional</sup> <a name="enableClassiclinkInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkInput"></a>

```typescript
public readonly enableClassiclinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDnsHostnamesInput`<sup>Optional</sup> <a name="enableDnsHostnamesInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnamesInput"></a>

```typescript
public readonly enableDnsHostnamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDnsSupportInput`<sup>Optional</sup> <a name="enableDnsSupportInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupportInput"></a>

```typescript
public readonly enableDnsSupportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableNetworkAddressUsageMetricsInput`<sup>Optional</sup> <a name="enableNetworkAddressUsageMetricsInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetricsInput"></a>

```typescript
public readonly enableNetworkAddressUsageMetricsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpc.Vpc.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTenancyInput`<sup>Optional</sup> <a name="instanceTenancyInput" id="@cdktf/provider-aws.vpc.Vpc.property.instanceTenancyInput"></a>

```typescript
public readonly instanceTenancyInput: string;
```

- *Type:* string

---

##### `ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="ipv4IpamPoolIdInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolIdInput"></a>

```typescript
public readonly ipv4IpamPoolIdInput: string;
```

- *Type:* string

---

##### `ipv4NetmaskLengthInput`<sup>Optional</sup> <a name="ipv4NetmaskLengthInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLengthInput"></a>

```typescript
public readonly ipv4NetmaskLengthInput: number;
```

- *Type:* number

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlockNetworkBorderGroupInput`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroupInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```typescript
public readonly ipv6CidrBlockNetworkBorderGroupInput: string;
```

- *Type:* string

---

##### `ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="ipv6IpamPoolIdInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolIdInput"></a>

```typescript
public readonly ipv6IpamPoolIdInput: string;
```

- *Type:* string

---

##### `ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="ipv6NetmaskLengthInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLengthInput"></a>

```typescript
public readonly ipv6NetmaskLengthInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpc.Vpc.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpc.Vpc.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `assignGeneratedIpv6CidrBlock`<sup>Required</sup> <a name="assignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlock"></a>

```typescript
public readonly assignGeneratedIpv6CidrBlock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.vpc.Vpc.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `enableClassiclink`<sup>Required</sup> <a name="enableClassiclink" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclink"></a>

```typescript
public readonly enableClassiclink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableClassiclinkDnsSupport`<sup>Required</sup> <a name="enableClassiclinkDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupport"></a>

```typescript
public readonly enableClassiclinkDnsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDnsHostnames`<sup>Required</sup> <a name="enableDnsHostnames" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnames"></a>

```typescript
public readonly enableDnsHostnames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDnsSupport`<sup>Required</sup> <a name="enableDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupport"></a>

```typescript
public readonly enableDnsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableNetworkAddressUsageMetrics`<sup>Required</sup> <a name="enableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetrics"></a>

```typescript
public readonly enableNetworkAddressUsageMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpc.Vpc.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceTenancy`<sup>Required</sup> <a name="instanceTenancy" id="@cdktf/provider-aws.vpc.Vpc.property.instanceTenancy"></a>

```typescript
public readonly instanceTenancy: string;
```

- *Type:* string

---

##### `ipv4IpamPoolId`<sup>Required</sup> <a name="ipv4IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolId"></a>

```typescript
public readonly ipv4IpamPoolId: string;
```

- *Type:* string

---

##### `ipv4NetmaskLength`<sup>Required</sup> <a name="ipv4NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLength"></a>

```typescript
public readonly ipv4NetmaskLength: number;
```

- *Type:* number

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Required</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroup"></a>

```typescript
public readonly ipv6CidrBlockNetworkBorderGroup: string;
```

- *Type:* string

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolId"></a>

```typescript
public readonly ipv6IpamPoolId: string;
```

- *Type:* string

---

##### `ipv6NetmaskLength`<sup>Required</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLength"></a>

```typescript
public readonly ipv6NetmaskLength: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpc.Vpc.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpc.Vpc.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpc.Vpc.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcConfig <a name="VpcConfig" id="@cdktf/provider-aws.vpc.VpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpc.VpcConfig.Initializer"></a>

```typescript
import { vpc } from '@cdktf/provider-aws'

const vpcConfig: vpc.VpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.assignGeneratedIpv6CidrBlock">assignGeneratedIpv6CidrBlock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#cidr_block Vpc#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclink">enableClassiclink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink Vpc#enable_classiclink}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclinkDnsSupport">enableClassiclinkDnsSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_hostnames Vpc#enable_dns_hostnames}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_support Vpc#enable_dns_support}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableNetworkAddressUsageMetrics">enableNetworkAddressUsageMetrics</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_network_address_usage_metrics Vpc#enable_network_address_usage_metrics}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#id Vpc#id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.instanceTenancy">instanceTenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#instance_tenancy Vpc#instance_tenancy}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_netmask_length Vpc#ipv4_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block_network_border_group Vpc#ipv6_cidr_block_network_border_group}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_netmask_length Vpc#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags Vpc#tags}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags_all Vpc#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpc.VpcConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpc.VpcConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpc.VpcConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpc.VpcConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpc.VpcConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpc.VpcConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpc.VpcConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assignGeneratedIpv6CidrBlock`<sup>Optional</sup> <a name="assignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.vpc.VpcConfig.property.assignGeneratedIpv6CidrBlock"></a>

```typescript
public readonly assignGeneratedIpv6CidrBlock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-aws.vpc.VpcConfig.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#cidr_block Vpc#cidr_block}.

---

##### `enableClassiclink`<sup>Optional</sup> <a name="enableClassiclink" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclink"></a>

```typescript
public readonly enableClassiclink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink Vpc#enable_classiclink}.

---

##### `enableClassiclinkDnsSupport`<sup>Optional</sup> <a name="enableClassiclinkDnsSupport" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclinkDnsSupport"></a>

```typescript
public readonly enableClassiclinkDnsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}.

---

##### `enableDnsHostnames`<sup>Optional</sup> <a name="enableDnsHostnames" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsHostnames"></a>

```typescript
public readonly enableDnsHostnames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_hostnames Vpc#enable_dns_hostnames}.

---

##### `enableDnsSupport`<sup>Optional</sup> <a name="enableDnsSupport" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsSupport"></a>

```typescript
public readonly enableDnsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_support Vpc#enable_dns_support}.

---

##### `enableNetworkAddressUsageMetrics`<sup>Optional</sup> <a name="enableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableNetworkAddressUsageMetrics"></a>

```typescript
public readonly enableNetworkAddressUsageMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_network_address_usage_metrics Vpc#enable_network_address_usage_metrics}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpc.VpcConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#id Vpc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceTenancy`<sup>Optional</sup> <a name="instanceTenancy" id="@cdktf/provider-aws.vpc.VpcConfig.property.instanceTenancy"></a>

```typescript
public readonly instanceTenancy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#instance_tenancy Vpc#instance_tenancy}.

---

##### `ipv4IpamPoolId`<sup>Optional</sup> <a name="ipv4IpamPoolId" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv4IpamPoolId"></a>

```typescript
public readonly ipv4IpamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}.

---

##### `ipv4NetmaskLength`<sup>Optional</sup> <a name="ipv4NetmaskLength" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv4NetmaskLength"></a>

```typescript
public readonly ipv4NetmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_netmask_length Vpc#ipv4_netmask_length}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}.

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```typescript
public readonly ipv6CidrBlockNetworkBorderGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block_network_border_group Vpc#ipv6_cidr_block_network_border_group}.

---

##### `ipv6IpamPoolId`<sup>Optional</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6IpamPoolId"></a>

```typescript
public readonly ipv6IpamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}.

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6NetmaskLength"></a>

```typescript
public readonly ipv6NetmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_netmask_length Vpc#ipv6_netmask_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpc.VpcConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags Vpc#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpc.VpcConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags_all Vpc#tags_all}.

---



