# `dataAwsNetworkfirewallFirewall` Submodule <a name="`dataAwsNetworkfirewallFirewall` Submodule" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkfirewallFirewall <a name="DataAwsNetworkfirewallFirewall" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall aws_networkfirewall_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall(scope: Construct, id: string, config?: DataAwsNetworkfirewallFirewallConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig">DataAwsNetworkfirewallFirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig">DataAwsNetworkfirewallFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isConstruct"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformElement"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformDataSource"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.deleteProtection">deleteProtection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList">DataAwsNetworkfirewallFirewallEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallPolicyArn">firewallPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallPolicyChangeProtection">firewallPolicyChangeProtection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallStatus">firewallStatus</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList">DataAwsNetworkfirewallFirewallFirewallStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.subnetChangeProtection">subnetChangeProtection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.subnetMapping">subnetMapping</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList">DataAwsNetworkfirewallFirewallSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.updateToken">updateToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deleteProtection`<sup>Required</sup> <a name="deleteProtection" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.deleteProtection"></a>

```typescript
public readonly deleteProtection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: DataAwsNetworkfirewallFirewallEncryptionConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList">DataAwsNetworkfirewallFirewallEncryptionConfigurationList</a>

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="firewallPolicyArn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallPolicyArn"></a>

```typescript
public readonly firewallPolicyArn: string;
```

- *Type:* string

---

##### `firewallPolicyChangeProtection`<sup>Required</sup> <a name="firewallPolicyChangeProtection" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallPolicyChangeProtection"></a>

```typescript
public readonly firewallPolicyChangeProtection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `firewallStatus`<sup>Required</sup> <a name="firewallStatus" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallStatus"></a>

```typescript
public readonly firewallStatus: DataAwsNetworkfirewallFirewallFirewallStatusList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList">DataAwsNetworkfirewallFirewallFirewallStatusList</a>

---

##### `subnetChangeProtection`<sup>Required</sup> <a name="subnetChangeProtection" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.subnetChangeProtection"></a>

```typescript
public readonly subnetChangeProtection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `subnetMapping`<sup>Required</sup> <a name="subnetMapping" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.subnetMapping"></a>

```typescript
public readonly subnetMapping: DataAwsNetworkfirewallFirewallSubnetMappingList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList">DataAwsNetworkfirewallFirewallSubnetMappingList</a>

---

##### `updateToken`<sup>Required</sup> <a name="updateToken" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.updateToken"></a>

```typescript
public readonly updateToken: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkfirewallFirewallConfig <a name="DataAwsNetworkfirewallFirewallConfig" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

const dataAwsNetworkfirewallFirewallConfig: dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#arn DataAwsNetworkfirewallFirewall#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#id DataAwsNetworkfirewallFirewall#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#name DataAwsNetworkfirewallFirewall#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#tags DataAwsNetworkfirewallFirewall#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#arn DataAwsNetworkfirewallFirewall#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#id DataAwsNetworkfirewallFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#name DataAwsNetworkfirewallFirewall#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#tags DataAwsNetworkfirewallFirewall#tags}.

---

### DataAwsNetworkfirewallFirewallEncryptionConfiguration <a name="DataAwsNetworkfirewallFirewallEncryptionConfiguration" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

const dataAwsNetworkfirewallFirewallEncryptionConfiguration: dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfiguration = { ... }
```


### DataAwsNetworkfirewallFirewallFirewallStatus <a name="DataAwsNetworkfirewallFirewallFirewallStatus" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatus.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

const dataAwsNetworkfirewallFirewallFirewallStatus: dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatus = { ... }
```


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

const dataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary: dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary = { ... }
```


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

const dataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs: dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs = { ... }
```


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

const dataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences: dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences = { ... }
```


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStates <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStates" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStates.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

const dataAwsNetworkfirewallFirewallFirewallStatusSyncStates: dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStates = { ... }
```


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

const dataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment: dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment = { ... }
```


### DataAwsNetworkfirewallFirewallSubnetMapping <a name="DataAwsNetworkfirewallFirewallSubnetMapping" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMapping.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

const dataAwsNetworkfirewallFirewallSubnetMapping: dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMapping = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsNetworkfirewallFirewallEncryptionConfigurationList <a name="DataAwsNetworkfirewallFirewallEncryptionConfigurationList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference <a name="DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfiguration">DataAwsNetworkfirewallFirewallEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsNetworkfirewallFirewallEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfiguration">DataAwsNetworkfirewallFirewallEncryptionConfiguration</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.get"></a>

```typescript
public get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.resolvedCidrCount">resolvedCidrCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resolvedCidrCount`<sup>Required</sup> <a name="resolvedCidrCount" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.resolvedCidrCount"></a>

```typescript
public readonly resolvedCidrCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.get"></a>

```typescript
public get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.availableCidrCount">availableCidrCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.ipSetReferences">ipSetReferences</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.utilizedCidrCount">utilizedCidrCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableCidrCount`<sup>Required</sup> <a name="availableCidrCount" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.availableCidrCount"></a>

```typescript
public readonly availableCidrCount: number;
```

- *Type:* number

---

##### `ipSetReferences`<sup>Required</sup> <a name="ipSetReferences" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.ipSetReferences"></a>

```typescript
public readonly ipSetReferences: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList</a>

---

##### `utilizedCidrCount`<sup>Required</sup> <a name="utilizedCidrCount" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.utilizedCidrCount"></a>

```typescript
public readonly utilizedCidrCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.get"></a>

```typescript
public get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.cidrs">cidrs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.cidrs"></a>

```typescript
public readonly cidrs: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusList <a name="DataAwsNetworkfirewallFirewallFirewallStatusList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.get"></a>

```typescript
public get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallFirewallStatusOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.capacityUsageSummary">capacityUsageSummary</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.configurationSyncStateSummary">configurationSyncStateSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.syncStates">syncStates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatus">DataAwsNetworkfirewallFirewallFirewallStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityUsageSummary`<sup>Required</sup> <a name="capacityUsageSummary" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.capacityUsageSummary"></a>

```typescript
public readonly capacityUsageSummary: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList</a>

---

##### `configurationSyncStateSummary`<sup>Required</sup> <a name="configurationSyncStateSummary" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.configurationSyncStateSummary"></a>

```typescript
public readonly configurationSyncStateSummary: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `syncStates`<sup>Required</sup> <a name="syncStates" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.syncStates"></a>

```typescript
public readonly syncStates: DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsNetworkfirewallFirewallFirewallStatus;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatus">DataAwsNetworkfirewallFirewallFirewallStatus</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get"></a>

```typescript
public get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.get"></a>

```typescript
public get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.attachment">attachment</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStates">DataAwsNetworkfirewallFirewallFirewallStatusSyncStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.attachment"></a>

```typescript
public readonly attachment: DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsNetworkfirewallFirewallFirewallStatusSyncStates;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStates">DataAwsNetworkfirewallFirewallFirewallStatusSyncStates</a>

---


### DataAwsNetworkfirewallFirewallSubnetMappingList <a name="DataAwsNetworkfirewallFirewallSubnetMappingList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.get"></a>

```typescript
public get(index: number): DataAwsNetworkfirewallFirewallSubnetMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallSubnetMappingOutputReference <a name="DataAwsNetworkfirewallFirewallSubnetMappingOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer"></a>

```typescript
import { dataAwsNetworkfirewallFirewall } from '@cdktf/provider-aws'

new dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMapping">DataAwsNetworkfirewallFirewallSubnetMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsNetworkfirewallFirewallSubnetMapping;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMapping">DataAwsNetworkfirewallFirewallSubnetMapping</a>

---



