# `networkfirewallFirewall` Submodule <a name="`networkfirewallFirewall` Submodule" id="@cdktf/provider-aws.networkfirewallFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallFirewall <a name="NetworkfirewallFirewall" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall aws_networkfirewall_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

new networkfirewallFirewall.NetworkfirewallFirewall(scope: Construct, id: string, config: NetworkfirewallFirewallConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig">NetworkfirewallFirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig">NetworkfirewallFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMapping">putSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetDeleteProtection">resetDeleteProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetFirewallPolicyChangeProtection">resetFirewallPolicyChangeProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetChangeProtection">resetSubnetChangeProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: NetworkfirewallFirewallEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a>

---

##### `putSubnetMapping` <a name="putSubnetMapping" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMapping"></a>

```typescript
public putSubnetMapping(value: IResolvable | NetworkfirewallFirewallSubnetMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping">NetworkfirewallFirewallSubnetMapping</a>[]

---

##### `resetDeleteProtection` <a name="resetDeleteProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetDeleteProtection"></a>

```typescript
public resetDeleteProtection(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetFirewallPolicyChangeProtection` <a name="resetFirewallPolicyChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetFirewallPolicyChangeProtection"></a>

```typescript
public resetFirewallPolicyChangeProtection(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubnetChangeProtection` <a name="resetSubnetChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetChangeProtection"></a>

```typescript
public resetSubnetChangeProtection(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

networkfirewallFirewall.NetworkfirewallFirewall.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference">NetworkfirewallFirewallEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallStatus">firewallStatus</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList">NetworkfirewallFirewallFirewallStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMapping">subnetMapping</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList">NetworkfirewallFirewallSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.updateToken">updateToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtectionInput">deleteProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArnInput">firewallPolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtectionInput">firewallPolicyChangeProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtectionInput">subnetChangeProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappingInput">subnetMappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping">NetworkfirewallFirewallSubnetMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtection">deleteProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArn">firewallPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtection">firewallPolicyChangeProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtection">subnetChangeProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: NetworkfirewallFirewallEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference">NetworkfirewallFirewallEncryptionConfigurationOutputReference</a>

---

##### `firewallStatus`<sup>Required</sup> <a name="firewallStatus" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallStatus"></a>

```typescript
public readonly firewallStatus: NetworkfirewallFirewallFirewallStatusList;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList">NetworkfirewallFirewallFirewallStatusList</a>

---

##### `subnetMapping`<sup>Required</sup> <a name="subnetMapping" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMapping"></a>

```typescript
public readonly subnetMapping: NetworkfirewallFirewallSubnetMappingList;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList">NetworkfirewallFirewallSubnetMappingList</a>

---

##### `updateToken`<sup>Required</sup> <a name="updateToken" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.updateToken"></a>

```typescript
public readonly updateToken: string;
```

- *Type:* string

---

##### `deleteProtectionInput`<sup>Optional</sup> <a name="deleteProtectionInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtectionInput"></a>

```typescript
public readonly deleteProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: NetworkfirewallFirewallEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a>

---

##### `firewallPolicyArnInput`<sup>Optional</sup> <a name="firewallPolicyArnInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArnInput"></a>

```typescript
public readonly firewallPolicyArnInput: string;
```

- *Type:* string

---

##### `firewallPolicyChangeProtectionInput`<sup>Optional</sup> <a name="firewallPolicyChangeProtectionInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtectionInput"></a>

```typescript
public readonly firewallPolicyChangeProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subnetChangeProtectionInput`<sup>Optional</sup> <a name="subnetChangeProtectionInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtectionInput"></a>

```typescript
public readonly subnetChangeProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetMappingInput`<sup>Optional</sup> <a name="subnetMappingInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappingInput"></a>

```typescript
public readonly subnetMappingInput: IResolvable | NetworkfirewallFirewallSubnetMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping">NetworkfirewallFirewallSubnetMapping</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `deleteProtection`<sup>Required</sup> <a name="deleteProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtection"></a>

```typescript
public readonly deleteProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="firewallPolicyArn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArn"></a>

```typescript
public readonly firewallPolicyArn: string;
```

- *Type:* string

---

##### `firewallPolicyChangeProtection`<sup>Required</sup> <a name="firewallPolicyChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtection"></a>

```typescript
public readonly firewallPolicyChangeProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subnetChangeProtection`<sup>Required</sup> <a name="subnetChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtection"></a>

```typescript
public readonly subnetChangeProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallFirewallConfig <a name="NetworkfirewallFirewallConfig" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

const networkfirewallFirewallConfig: networkfirewallFirewall.NetworkfirewallFirewallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyArn">firewallPolicyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#name NetworkfirewallFirewall#name}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetMapping">subnetMapping</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping">NetworkfirewallFirewallSubnetMapping</a>[]</code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.deleteProtection">deleteProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#description NetworkfirewallFirewall#description}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyChangeProtection">firewallPolicyChangeProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#id NetworkfirewallFirewall#id}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetChangeProtection">subnetChangeProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#tags_all NetworkfirewallFirewall#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="firewallPolicyArn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyArn"></a>

```typescript
public readonly firewallPolicyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#name NetworkfirewallFirewall#name}.

---

##### `subnetMapping`<sup>Required</sup> <a name="subnetMapping" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetMapping"></a>

```typescript
public readonly subnetMapping: IResolvable | NetworkfirewallFirewallSubnetMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping">NetworkfirewallFirewallSubnetMapping</a>[]

subnet_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#subnet_mapping NetworkfirewallFirewall#subnet_mapping}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}.

---

##### `deleteProtection`<sup>Optional</sup> <a name="deleteProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.deleteProtection"></a>

```typescript
public readonly deleteProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#description NetworkfirewallFirewall#description}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: NetworkfirewallFirewallEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#encryption_configuration NetworkfirewallFirewall#encryption_configuration}

---

##### `firewallPolicyChangeProtection`<sup>Optional</sup> <a name="firewallPolicyChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyChangeProtection"></a>

```typescript
public readonly firewallPolicyChangeProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#id NetworkfirewallFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subnetChangeProtection`<sup>Optional</sup> <a name="subnetChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetChangeProtection"></a>

```typescript
public readonly subnetChangeProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#tags_all NetworkfirewallFirewall#tags_all}.

---

### NetworkfirewallFirewallEncryptionConfiguration <a name="NetworkfirewallFirewallEncryptionConfiguration" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

const networkfirewallFirewallEncryptionConfiguration: networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#type NetworkfirewallFirewall#type}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#key_id NetworkfirewallFirewall#key_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#type NetworkfirewallFirewall#type}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#key_id NetworkfirewallFirewall#key_id}.

---

### NetworkfirewallFirewallFirewallStatus <a name="NetworkfirewallFirewallFirewallStatus" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatus.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

const networkfirewallFirewallFirewallStatus: networkfirewallFirewall.NetworkfirewallFirewallFirewallStatus = { ... }
```


### NetworkfirewallFirewallFirewallStatusSyncStates <a name="NetworkfirewallFirewallFirewallStatusSyncStates" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStates.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

const networkfirewallFirewallFirewallStatusSyncStates: networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStates = { ... }
```


### NetworkfirewallFirewallFirewallStatusSyncStatesAttachment <a name="NetworkfirewallFirewallFirewallStatusSyncStatesAttachment" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachment.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

const networkfirewallFirewallFirewallStatusSyncStatesAttachment: networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachment = { ... }
```


### NetworkfirewallFirewallSubnetMapping <a name="NetworkfirewallFirewallSubnetMapping" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

const networkfirewallFirewallSubnetMapping: networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#subnet_id NetworkfirewallFirewall#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#ip_address_type NetworkfirewallFirewall#ip_address_type}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#subnet_id NetworkfirewallFirewall#subnet_id}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#ip_address_type NetworkfirewallFirewall#ip_address_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallFirewallEncryptionConfigurationOutputReference <a name="NetworkfirewallFirewallEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

new networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkfirewallFirewallEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a>

---


### NetworkfirewallFirewallFirewallStatusList <a name="NetworkfirewallFirewallFirewallStatusList" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

new networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.get"></a>

```typescript
public get(index: number): NetworkfirewallFirewallFirewallStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkfirewallFirewallFirewallStatusOutputReference <a name="NetworkfirewallFirewallFirewallStatusOutputReference" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

new networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.syncStates">syncStates</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList">NetworkfirewallFirewallFirewallStatusSyncStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatus">NetworkfirewallFirewallFirewallStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `syncStates`<sup>Required</sup> <a name="syncStates" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.syncStates"></a>

```typescript
public readonly syncStates: NetworkfirewallFirewallFirewallStatusSyncStatesList;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList">NetworkfirewallFirewallFirewallStatusSyncStatesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkfirewallFirewallFirewallStatus;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatus">NetworkfirewallFirewallFirewallStatus</a>

---


### NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList <a name="NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

new networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get"></a>

```typescript
public get(index: number): NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference <a name="NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

new networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachment">NetworkfirewallFirewallFirewallStatusSyncStatesAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkfirewallFirewallFirewallStatusSyncStatesAttachment;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachment">NetworkfirewallFirewallFirewallStatusSyncStatesAttachment</a>

---


### NetworkfirewallFirewallFirewallStatusSyncStatesList <a name="NetworkfirewallFirewallFirewallStatusSyncStatesList" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

new networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.get"></a>

```typescript
public get(index: number): NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference <a name="NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

new networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.attachment">attachment</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList">NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStates">NetworkfirewallFirewallFirewallStatusSyncStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.attachment"></a>

```typescript
public readonly attachment: NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList">NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkfirewallFirewallFirewallStatusSyncStates;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStates">NetworkfirewallFirewallFirewallStatusSyncStates</a>

---


### NetworkfirewallFirewallSubnetMappingList <a name="NetworkfirewallFirewallSubnetMappingList" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

new networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.get"></a>

```typescript
public get(index: number): NetworkfirewallFirewallSubnetMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping">NetworkfirewallFirewallSubnetMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallFirewallSubnetMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping">NetworkfirewallFirewallSubnetMapping</a>[]

---


### NetworkfirewallFirewallSubnetMappingOutputReference <a name="NetworkfirewallFirewallSubnetMappingOutputReference" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktf/provider-aws'

new networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping">NetworkfirewallFirewallSubnetMapping</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkfirewallFirewallSubnetMapping | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping">NetworkfirewallFirewallSubnetMapping</a> | cdktf.IResolvable

---



