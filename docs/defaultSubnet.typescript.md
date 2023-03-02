# `defaultSubnet` Submodule <a name="`defaultSubnet` Submodule" id="@cdktf/provider-aws.defaultSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultSubnet <a name="DefaultSubnet" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_subnet aws_default_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer"></a>

```typescript
import { defaultSubnet } from '@cdktf/provider-aws'

new defaultSubnet.DefaultSubnet(scope: Construct, id: string, config: DefaultSubnetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig">DefaultSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig">DefaultSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetAssignIpv6AddressOnCreation">resetAssignIpv6AddressOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetCustomerOwnedIpv4Pool">resetCustomerOwnedIpv4Pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableDns64">resetEnableDns64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsAaaaRecordOnLaunch">resetEnableResourceNameDnsAaaaRecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsARecordOnLaunch">resetEnableResourceNameDnsARecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6Native">resetIpv6Native</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapCustomerOwnedIpOnLaunch">resetMapCustomerOwnedIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapPublicIpOnLaunch">resetMapPublicIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetPrivateDnsHostnameTypeOnLaunch">resetPrivateDnsHostnameTypeOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts"></a>

```typescript
public putTimeouts(value: DefaultSubnetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a>

---

##### `resetAssignIpv6AddressOnCreation` <a name="resetAssignIpv6AddressOnCreation" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetAssignIpv6AddressOnCreation"></a>

```typescript
public resetAssignIpv6AddressOnCreation(): void
```

##### `resetCustomerOwnedIpv4Pool` <a name="resetCustomerOwnedIpv4Pool" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetCustomerOwnedIpv4Pool"></a>

```typescript
public resetCustomerOwnedIpv4Pool(): void
```

##### `resetEnableDns64` <a name="resetEnableDns64" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableDns64"></a>

```typescript
public resetEnableDns64(): void
```

##### `resetEnableResourceNameDnsAaaaRecordOnLaunch` <a name="resetEnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsAaaaRecordOnLaunch"></a>

```typescript
public resetEnableResourceNameDnsAaaaRecordOnLaunch(): void
```

##### `resetEnableResourceNameDnsARecordOnLaunch` <a name="resetEnableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsARecordOnLaunch"></a>

```typescript
public resetEnableResourceNameDnsARecordOnLaunch(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetIpv6Native` <a name="resetIpv6Native" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6Native"></a>

```typescript
public resetIpv6Native(): void
```

##### `resetMapCustomerOwnedIpOnLaunch` <a name="resetMapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapCustomerOwnedIpOnLaunch"></a>

```typescript
public resetMapCustomerOwnedIpOnLaunch(): void
```

##### `resetMapPublicIpOnLaunch` <a name="resetMapPublicIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapPublicIpOnLaunch"></a>

```typescript
public resetMapPublicIpOnLaunch(): void
```

##### `resetPrivateDnsHostnameTypeOnLaunch` <a name="resetPrivateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetPrivateDnsHostnameTypeOnLaunch"></a>

```typescript
public resetPrivateDnsHostnameTypeOnLaunch(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isConstruct"></a>

```typescript
import { defaultSubnet } from '@cdktf/provider-aws'

defaultSubnet.DefaultSubnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement"></a>

```typescript
import { defaultSubnet } from '@cdktf/provider-aws'

defaultSubnet.DefaultSubnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource"></a>

```typescript
import { defaultSubnet } from '@cdktf/provider-aws'

defaultSubnet.DefaultSubnet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.existingDefaultSubnet">existingDefaultSubnet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockAssociationId">ipv6CidrBlockAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference">DefaultSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreationInput">assignIpv6AddressOnCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4PoolInput">customerOwnedIpv4PoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64Input">enableDns64Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput">enableResourceNameDnsAaaaRecordOnLaunchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunchInput">enableResourceNameDnsARecordOnLaunchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6NativeInput">ipv6NativeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunchInput">mapCustomerOwnedIpOnLaunchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunchInput">mapPublicIpOnLaunchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunchInput">privateDnsHostnameTypeOnLaunchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreation">assignIpv6AddressOnCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64">enableDns64</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunch">enableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunch">enableResourceNameDnsARecordOnLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6Native">ipv6Native</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunch">mapCustomerOwnedIpOnLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunch">mapPublicIpOnLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunch">privateDnsHostnameTypeOnLaunch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `existingDefaultSubnet`<sup>Required</sup> <a name="existingDefaultSubnet" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.existingDefaultSubnet"></a>

```typescript
public readonly existingDefaultSubnet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ipv6CidrBlockAssociationId`<sup>Required</sup> <a name="ipv6CidrBlockAssociationId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockAssociationId"></a>

```typescript
public readonly ipv6CidrBlockAssociationId: string;
```

- *Type:* string

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeouts"></a>

```typescript
public readonly timeouts: DefaultSubnetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference">DefaultSubnetTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `assignIpv6AddressOnCreationInput`<sup>Optional</sup> <a name="assignIpv6AddressOnCreationInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreationInput"></a>

```typescript
public readonly assignIpv6AddressOnCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `customerOwnedIpv4PoolInput`<sup>Optional</sup> <a name="customerOwnedIpv4PoolInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4PoolInput"></a>

```typescript
public readonly customerOwnedIpv4PoolInput: string;
```

- *Type:* string

---

##### `enableDns64Input`<sup>Optional</sup> <a name="enableDns64Input" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64Input"></a>

```typescript
public readonly enableDns64Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableResourceNameDnsAaaaRecordOnLaunchInput`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecordOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecordOnLaunchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableResourceNameDnsARecordOnLaunchInput`<sup>Optional</sup> <a name="enableResourceNameDnsARecordOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunchInput"></a>

```typescript
public readonly enableResourceNameDnsARecordOnLaunchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `ipv6NativeInput`<sup>Optional</sup> <a name="ipv6NativeInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6NativeInput"></a>

```typescript
public readonly ipv6NativeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mapCustomerOwnedIpOnLaunchInput`<sup>Optional</sup> <a name="mapCustomerOwnedIpOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunchInput"></a>

```typescript
public readonly mapCustomerOwnedIpOnLaunchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mapPublicIpOnLaunchInput`<sup>Optional</sup> <a name="mapPublicIpOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunchInput"></a>

```typescript
public readonly mapPublicIpOnLaunchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateDnsHostnameTypeOnLaunchInput`<sup>Optional</sup> <a name="privateDnsHostnameTypeOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunchInput"></a>

```typescript
public readonly privateDnsHostnameTypeOnLaunchInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DefaultSubnetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a> | cdktf.IResolvable

---

##### `assignIpv6AddressOnCreation`<sup>Required</sup> <a name="assignIpv6AddressOnCreation" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreation"></a>

```typescript
public readonly assignIpv6AddressOnCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `customerOwnedIpv4Pool`<sup>Required</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4Pool"></a>

```typescript
public readonly customerOwnedIpv4Pool: string;
```

- *Type:* string

---

##### `enableDns64`<sup>Required</sup> <a name="enableDns64" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64"></a>

```typescript
public readonly enableDns64: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableResourceNameDnsAaaaRecordOnLaunch`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecordOnLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableResourceNameDnsARecordOnLaunch`<sup>Required</sup> <a name="enableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunch"></a>

```typescript
public readonly enableResourceNameDnsARecordOnLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `ipv6Native`<sup>Required</sup> <a name="ipv6Native" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6Native"></a>

```typescript
public readonly ipv6Native: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mapCustomerOwnedIpOnLaunch`<sup>Required</sup> <a name="mapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunch"></a>

```typescript
public readonly mapCustomerOwnedIpOnLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mapPublicIpOnLaunch`<sup>Required</sup> <a name="mapPublicIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunch"></a>

```typescript
public readonly mapPublicIpOnLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateDnsHostnameTypeOnLaunch`<sup>Required</sup> <a name="privateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunch"></a>

```typescript
public readonly privateDnsHostnameTypeOnLaunch: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultSubnetConfig <a name="DefaultSubnetConfig" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.Initializer"></a>

```typescript
import { defaultSubnet } from '@cdktf/provider-aws'

const defaultSubnetConfig: defaultSubnet.DefaultSubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#availability_zone DefaultSubnet#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.assignIpv6AddressOnCreation">assignIpv6AddressOnCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#assign_ipv6_address_on_creation DefaultSubnet#assign_ipv6_address_on_creation}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableDns64">enableDns64</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_dns64 DefaultSubnet#enable_dns64}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch">enableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_aaaa_record_on_launch DefaultSubnet#enable_resource_name_dns_aaaa_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsARecordOnLaunch">enableResourceNameDnsARecordOnLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_a_record_on_launch DefaultSubnet#enable_resource_name_dns_a_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#force_destroy DefaultSubnet#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#id DefaultSubnet#id}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_cidr_block DefaultSubnet#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6Native">ipv6Native</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_native DefaultSubnet#ipv6_native}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapCustomerOwnedIpOnLaunch">mapCustomerOwnedIpOnLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapPublicIpOnLaunch">mapPublicIpOnLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.privateDnsHostnameTypeOnLaunch">privateDnsHostnameTypeOnLaunch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#private_dns_hostname_type_on_launch DefaultSubnet#private_dns_hostname_type_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags DefaultSubnet#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags_all DefaultSubnet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#availability_zone DefaultSubnet#availability_zone}.

---

##### `assignIpv6AddressOnCreation`<sup>Optional</sup> <a name="assignIpv6AddressOnCreation" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.assignIpv6AddressOnCreation"></a>

```typescript
public readonly assignIpv6AddressOnCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#assign_ipv6_address_on_creation DefaultSubnet#assign_ipv6_address_on_creation}.

---

##### `customerOwnedIpv4Pool`<sup>Optional</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.customerOwnedIpv4Pool"></a>

```typescript
public readonly customerOwnedIpv4Pool: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}.

---

##### `enableDns64`<sup>Optional</sup> <a name="enableDns64" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableDns64"></a>

```typescript
public readonly enableDns64: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_dns64 DefaultSubnet#enable_dns64}.

---

##### `enableResourceNameDnsAaaaRecordOnLaunch`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecordOnLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_aaaa_record_on_launch DefaultSubnet#enable_resource_name_dns_aaaa_record_on_launch}.

---

##### `enableResourceNameDnsARecordOnLaunch`<sup>Optional</sup> <a name="enableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsARecordOnLaunch"></a>

```typescript
public readonly enableResourceNameDnsARecordOnLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_a_record_on_launch DefaultSubnet#enable_resource_name_dns_a_record_on_launch}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#force_destroy DefaultSubnet#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#id DefaultSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_cidr_block DefaultSubnet#ipv6_cidr_block}.

---

##### `ipv6Native`<sup>Optional</sup> <a name="ipv6Native" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6Native"></a>

```typescript
public readonly ipv6Native: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_native DefaultSubnet#ipv6_native}.

---

##### `mapCustomerOwnedIpOnLaunch`<sup>Optional</sup> <a name="mapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapCustomerOwnedIpOnLaunch"></a>

```typescript
public readonly mapCustomerOwnedIpOnLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}.

---

##### `mapPublicIpOnLaunch`<sup>Optional</sup> <a name="mapPublicIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapPublicIpOnLaunch"></a>

```typescript
public readonly mapPublicIpOnLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}.

---

##### `privateDnsHostnameTypeOnLaunch`<sup>Optional</sup> <a name="privateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.privateDnsHostnameTypeOnLaunch"></a>

```typescript
public readonly privateDnsHostnameTypeOnLaunch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#private_dns_hostname_type_on_launch DefaultSubnet#private_dns_hostname_type_on_launch}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags DefaultSubnet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags_all DefaultSubnet#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DefaultSubnetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#timeouts DefaultSubnet#timeouts}

---

### DefaultSubnetTimeouts <a name="DefaultSubnetTimeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.Initializer"></a>

```typescript
import { defaultSubnet } from '@cdktf/provider-aws'

const defaultSubnetTimeouts: defaultSubnet.DefaultSubnetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#create DefaultSubnet#create}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#delete DefaultSubnet#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#create DefaultSubnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#delete DefaultSubnet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultSubnetTimeoutsOutputReference <a name="DefaultSubnetTimeoutsOutputReference" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer"></a>

```typescript
import { defaultSubnet } from '@cdktf/provider-aws'

new defaultSubnet.DefaultSubnetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DefaultSubnetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a> | cdktf.IResolvable

---



