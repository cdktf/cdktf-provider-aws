# `defaultVpc` Submodule <a name="`defaultVpc` Submodule" id="@cdktf/provider-aws.defaultVpc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultVpc <a name="DefaultVpc" id="@cdktf/provider-aws.defaultVpc.DefaultVpc"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc aws_default_vpc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer"></a>

```typescript
import { defaultVpc } from '@cdktf/provider-aws'

new defaultVpc.DefaultVpc(scope: Construct, id: string, config?: DefaultVpcConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig">DefaultVpcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig">DefaultVpcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetAssignGeneratedIpv6CidrBlock">resetAssignGeneratedIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclink">resetEnableClassiclink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclinkDnsSupport">resetEnableClassiclinkDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsHostnames">resetEnableDnsHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsSupport">resetEnableDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableNetworkAddressUsageMetrics">resetEnableNetworkAddressUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlockNetworkBorderGroup">resetIpv6CidrBlockNetworkBorderGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6IpamPoolId">resetIpv6IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6NetmaskLength">resetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAssignGeneratedIpv6CidrBlock` <a name="resetAssignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetAssignGeneratedIpv6CidrBlock"></a>

```typescript
public resetAssignGeneratedIpv6CidrBlock(): void
```

##### `resetEnableClassiclink` <a name="resetEnableClassiclink" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclink"></a>

```typescript
public resetEnableClassiclink(): void
```

##### `resetEnableClassiclinkDnsSupport` <a name="resetEnableClassiclinkDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclinkDnsSupport"></a>

```typescript
public resetEnableClassiclinkDnsSupport(): void
```

##### `resetEnableDnsHostnames` <a name="resetEnableDnsHostnames" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsHostnames"></a>

```typescript
public resetEnableDnsHostnames(): void
```

##### `resetEnableDnsSupport` <a name="resetEnableDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsSupport"></a>

```typescript
public resetEnableDnsSupport(): void
```

##### `resetEnableNetworkAddressUsageMetrics` <a name="resetEnableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableNetworkAddressUsageMetrics"></a>

```typescript
public resetEnableNetworkAddressUsageMetrics(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetIpv6CidrBlockNetworkBorderGroup` <a name="resetIpv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlockNetworkBorderGroup"></a>

```typescript
public resetIpv6CidrBlockNetworkBorderGroup(): void
```

##### `resetIpv6IpamPoolId` <a name="resetIpv6IpamPoolId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6IpamPoolId"></a>

```typescript
public resetIpv6IpamPoolId(): void
```

##### `resetIpv6NetmaskLength` <a name="resetIpv6NetmaskLength" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6NetmaskLength"></a>

```typescript
public resetIpv6NetmaskLength(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isConstruct"></a>

```typescript
import { defaultVpc } from '@cdktf/provider-aws'

defaultVpc.DefaultVpc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformElement"></a>

```typescript
import { defaultVpc } from '@cdktf/provider-aws'

defaultVpc.DefaultVpc.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformResource"></a>

```typescript
import { defaultVpc } from '@cdktf/provider-aws'

defaultVpc.DefaultVpc.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultNetworkAclId">defaultNetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultRouteTableId">defaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultSecurityGroupId">defaultSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dhcpOptionsId">dhcpOptionsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.existingDefaultVpc">existingDefaultVpc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.instanceTenancy">instanceTenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6AssociationId">ipv6AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.mainRouteTableId">mainRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlockInput">assignGeneratedIpv6CidrBlockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupportInput">enableClassiclinkDnsSupportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkInput">enableClassiclinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnamesInput">enableDnsHostnamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupportInput">enableDnsSupportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetricsInput">enableNetworkAddressUsageMetricsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroupInput">ipv6CidrBlockNetworkBorderGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolIdInput">ipv6IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLengthInput">ipv6NetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlock">assignGeneratedIpv6CidrBlock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclink">enableClassiclink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupport">enableClassiclinkDnsSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetrics">enableNetworkAddressUsageMetrics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `defaultNetworkAclId`<sup>Required</sup> <a name="defaultNetworkAclId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultNetworkAclId"></a>

```typescript
public readonly defaultNetworkAclId: string;
```

- *Type:* string

---

##### `defaultRouteTableId`<sup>Required</sup> <a name="defaultRouteTableId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultRouteTableId"></a>

```typescript
public readonly defaultRouteTableId: string;
```

- *Type:* string

---

##### `defaultSecurityGroupId`<sup>Required</sup> <a name="defaultSecurityGroupId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultSecurityGroupId"></a>

```typescript
public readonly defaultSecurityGroupId: string;
```

- *Type:* string

---

##### `dhcpOptionsId`<sup>Required</sup> <a name="dhcpOptionsId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dhcpOptionsId"></a>

```typescript
public readonly dhcpOptionsId: string;
```

- *Type:* string

---

##### `existingDefaultVpc`<sup>Required</sup> <a name="existingDefaultVpc" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.existingDefaultVpc"></a>

```typescript
public readonly existingDefaultVpc: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `instanceTenancy`<sup>Required</sup> <a name="instanceTenancy" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.instanceTenancy"></a>

```typescript
public readonly instanceTenancy: string;
```

- *Type:* string

---

##### `ipv6AssociationId`<sup>Required</sup> <a name="ipv6AssociationId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6AssociationId"></a>

```typescript
public readonly ipv6AssociationId: string;
```

- *Type:* string

---

##### `mainRouteTableId`<sup>Required</sup> <a name="mainRouteTableId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.mainRouteTableId"></a>

```typescript
public readonly mainRouteTableId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `assignGeneratedIpv6CidrBlockInput`<sup>Optional</sup> <a name="assignGeneratedIpv6CidrBlockInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlockInput"></a>

```typescript
public readonly assignGeneratedIpv6CidrBlockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableClassiclinkDnsSupportInput`<sup>Optional</sup> <a name="enableClassiclinkDnsSupportInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupportInput"></a>

```typescript
public readonly enableClassiclinkDnsSupportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableClassiclinkInput`<sup>Optional</sup> <a name="enableClassiclinkInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkInput"></a>

```typescript
public readonly enableClassiclinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDnsHostnamesInput`<sup>Optional</sup> <a name="enableDnsHostnamesInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnamesInput"></a>

```typescript
public readonly enableDnsHostnamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDnsSupportInput`<sup>Optional</sup> <a name="enableDnsSupportInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupportInput"></a>

```typescript
public readonly enableDnsSupportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableNetworkAddressUsageMetricsInput`<sup>Optional</sup> <a name="enableNetworkAddressUsageMetricsInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetricsInput"></a>

```typescript
public readonly enableNetworkAddressUsageMetricsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlockNetworkBorderGroupInput`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroupInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```typescript
public readonly ipv6CidrBlockNetworkBorderGroupInput: string;
```

- *Type:* string

---

##### `ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="ipv6IpamPoolIdInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolIdInput"></a>

```typescript
public readonly ipv6IpamPoolIdInput: string;
```

- *Type:* string

---

##### `ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="ipv6NetmaskLengthInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLengthInput"></a>

```typescript
public readonly ipv6NetmaskLengthInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `assignGeneratedIpv6CidrBlock`<sup>Required</sup> <a name="assignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlock"></a>

```typescript
public readonly assignGeneratedIpv6CidrBlock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableClassiclink`<sup>Required</sup> <a name="enableClassiclink" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclink"></a>

```typescript
public readonly enableClassiclink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableClassiclinkDnsSupport`<sup>Required</sup> <a name="enableClassiclinkDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupport"></a>

```typescript
public readonly enableClassiclinkDnsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDnsHostnames`<sup>Required</sup> <a name="enableDnsHostnames" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnames"></a>

```typescript
public readonly enableDnsHostnames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDnsSupport`<sup>Required</sup> <a name="enableDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupport"></a>

```typescript
public readonly enableDnsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableNetworkAddressUsageMetrics`<sup>Required</sup> <a name="enableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetrics"></a>

```typescript
public readonly enableNetworkAddressUsageMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Required</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroup"></a>

```typescript
public readonly ipv6CidrBlockNetworkBorderGroup: string;
```

- *Type:* string

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolId"></a>

```typescript
public readonly ipv6IpamPoolId: string;
```

- *Type:* string

---

##### `ipv6NetmaskLength`<sup>Required</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLength"></a>

```typescript
public readonly ipv6NetmaskLength: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultVpcConfig <a name="DefaultVpcConfig" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.Initializer"></a>

```typescript
import { defaultVpc } from '@cdktf/provider-aws'

const defaultVpcConfig: defaultVpc.DefaultVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.assignGeneratedIpv6CidrBlock">assignGeneratedIpv6CidrBlock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclink">enableClassiclink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink DefaultVpc#enable_classiclink}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclinkDnsSupport">enableClassiclinkDnsSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableNetworkAddressUsageMetrics">enableNetworkAddressUsageMetrics</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#force_destroy DefaultVpc#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#id DefaultVpc#id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags DefaultVpc#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags_all DefaultVpc#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assignGeneratedIpv6CidrBlock`<sup>Optional</sup> <a name="assignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.assignGeneratedIpv6CidrBlock"></a>

```typescript
public readonly assignGeneratedIpv6CidrBlock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}.

---

##### `enableClassiclink`<sup>Optional</sup> <a name="enableClassiclink" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclink"></a>

```typescript
public readonly enableClassiclink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink DefaultVpc#enable_classiclink}.

---

##### `enableClassiclinkDnsSupport`<sup>Optional</sup> <a name="enableClassiclinkDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclinkDnsSupport"></a>

```typescript
public readonly enableClassiclinkDnsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}.

---

##### `enableDnsHostnames`<sup>Optional</sup> <a name="enableDnsHostnames" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsHostnames"></a>

```typescript
public readonly enableDnsHostnames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}.

---

##### `enableDnsSupport`<sup>Optional</sup> <a name="enableDnsSupport" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsSupport"></a>

```typescript
public readonly enableDnsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}.

---

##### `enableNetworkAddressUsageMetrics`<sup>Optional</sup> <a name="enableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableNetworkAddressUsageMetrics"></a>

```typescript
public readonly enableNetworkAddressUsageMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#force_destroy DefaultVpc#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#id DefaultVpc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}.

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```typescript
public readonly ipv6CidrBlockNetworkBorderGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}.

---

##### `ipv6IpamPoolId`<sup>Optional</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6IpamPoolId"></a>

```typescript
public readonly ipv6IpamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}.

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6NetmaskLength"></a>

```typescript
public readonly ipv6NetmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags DefaultVpc#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags_all DefaultVpc#tags_all}.

---



