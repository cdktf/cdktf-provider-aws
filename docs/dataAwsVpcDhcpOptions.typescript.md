# `dataAwsVpcDhcpOptions` Submodule <a name="`dataAwsVpcDhcpOptions` Submodule" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcDhcpOptions <a name="DataAwsVpcDhcpOptions" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options aws_vpc_dhcp_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.Initializer"></a>

```typescript
import { dataAwsVpcDhcpOptions } from '@cdktf/provider-aws'

new dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions(scope: Construct, id: string, config?: DataAwsVpcDhcpOptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig">DataAwsVpcDhcpOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig">DataAwsVpcDhcpOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetDhcpOptionsId">resetDhcpOptionsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsVpcDhcpOptionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter">DataAwsVpcDhcpOptionsFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsVpcDhcpOptionsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts">DataAwsVpcDhcpOptionsTimeouts</a>

---

##### `resetDhcpOptionsId` <a name="resetDhcpOptionsId" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetDhcpOptionsId"></a>

```typescript
public resetDhcpOptionsId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isConstruct"></a>

```typescript
import { dataAwsVpcDhcpOptions } from '@cdktf/provider-aws'

dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isTerraformElement"></a>

```typescript
import { dataAwsVpcDhcpOptions } from '@cdktf/provider-aws'

dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isTerraformDataSource"></a>

```typescript
import { dataAwsVpcDhcpOptions } from '@cdktf/provider-aws'

dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.domainNameServers">domainNameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList">DataAwsVpcDhcpOptionsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.netbiosNameServers">netbiosNameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.netbiosNodeType">netbiosNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.ntpServers">ntpServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference">DataAwsVpcDhcpOptionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.dhcpOptionsIdInput">dhcpOptionsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter">DataAwsVpcDhcpOptionsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts">DataAwsVpcDhcpOptionsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.dhcpOptionsId">dhcpOptionsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainNameServers`<sup>Required</sup> <a name="domainNameServers" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.domainNameServers"></a>

```typescript
public readonly domainNameServers: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.filter"></a>

```typescript
public readonly filter: DataAwsVpcDhcpOptionsFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList">DataAwsVpcDhcpOptionsFilterList</a>

---

##### `netbiosNameServers`<sup>Required</sup> <a name="netbiosNameServers" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.netbiosNameServers"></a>

```typescript
public readonly netbiosNameServers: string[];
```

- *Type:* string[]

---

##### `netbiosNodeType`<sup>Required</sup> <a name="netbiosNodeType" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.netbiosNodeType"></a>

```typescript
public readonly netbiosNodeType: string;
```

- *Type:* string

---

##### `ntpServers`<sup>Required</sup> <a name="ntpServers" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.ntpServers"></a>

```typescript
public readonly ntpServers: string[];
```

- *Type:* string[]

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsVpcDhcpOptionsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference">DataAwsVpcDhcpOptionsTimeoutsOutputReference</a>

---

##### `dhcpOptionsIdInput`<sup>Optional</sup> <a name="dhcpOptionsIdInput" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.dhcpOptionsIdInput"></a>

```typescript
public readonly dhcpOptionsIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsVpcDhcpOptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter">DataAwsVpcDhcpOptionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsVpcDhcpOptionsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts">DataAwsVpcDhcpOptionsTimeouts</a> | cdktf.IResolvable

---

##### `dhcpOptionsId`<sup>Required</sup> <a name="dhcpOptionsId" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.dhcpOptionsId"></a>

```typescript
public readonly dhcpOptionsId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcDhcpOptionsConfig <a name="DataAwsVpcDhcpOptionsConfig" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.Initializer"></a>

```typescript
import { dataAwsVpcDhcpOptions } from '@cdktf/provider-aws'

const dataAwsVpcDhcpOptionsConfig: dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.dhcpOptionsId">dhcpOptionsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#dhcp_options_id DataAwsVpcDhcpOptions#dhcp_options_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter">DataAwsVpcDhcpOptionsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#id DataAwsVpcDhcpOptions#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#tags DataAwsVpcDhcpOptions#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts">DataAwsVpcDhcpOptionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dhcpOptionsId`<sup>Optional</sup> <a name="dhcpOptionsId" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.dhcpOptionsId"></a>

```typescript
public readonly dhcpOptionsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#dhcp_options_id DataAwsVpcDhcpOptions#dhcp_options_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsVpcDhcpOptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter">DataAwsVpcDhcpOptionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#filter DataAwsVpcDhcpOptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#id DataAwsVpcDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#tags DataAwsVpcDhcpOptions#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsVpcDhcpOptionsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts">DataAwsVpcDhcpOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#timeouts DataAwsVpcDhcpOptions#timeouts}

---

### DataAwsVpcDhcpOptionsFilter <a name="DataAwsVpcDhcpOptionsFilter" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter.Initializer"></a>

```typescript
import { dataAwsVpcDhcpOptions } from '@cdktf/provider-aws'

const dataAwsVpcDhcpOptionsFilter: dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#name DataAwsVpcDhcpOptions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#values DataAwsVpcDhcpOptions#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#name DataAwsVpcDhcpOptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#values DataAwsVpcDhcpOptions#values}.

---

### DataAwsVpcDhcpOptionsTimeouts <a name="DataAwsVpcDhcpOptionsTimeouts" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts.Initializer"></a>

```typescript
import { dataAwsVpcDhcpOptions } from '@cdktf/provider-aws'

const dataAwsVpcDhcpOptionsTimeouts: dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#read DataAwsVpcDhcpOptions#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options#read DataAwsVpcDhcpOptions#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcDhcpOptionsFilterList <a name="DataAwsVpcDhcpOptionsFilterList" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.Initializer"></a>

```typescript
import { dataAwsVpcDhcpOptions } from '@cdktf/provider-aws'

new dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.get"></a>

```typescript
public get(index: number): DataAwsVpcDhcpOptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter">DataAwsVpcDhcpOptionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsVpcDhcpOptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter">DataAwsVpcDhcpOptionsFilter</a>[]

---


### DataAwsVpcDhcpOptionsFilterOutputReference <a name="DataAwsVpcDhcpOptionsFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcDhcpOptions } from '@cdktf/provider-aws'

new dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter">DataAwsVpcDhcpOptionsFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcDhcpOptionsFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsFilter">DataAwsVpcDhcpOptionsFilter</a> | cdktf.IResolvable

---


### DataAwsVpcDhcpOptionsTimeoutsOutputReference <a name="DataAwsVpcDhcpOptionsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcDhcpOptions } from '@cdktf/provider-aws'

new dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts">DataAwsVpcDhcpOptionsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcDhcpOptionsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcDhcpOptions.DataAwsVpcDhcpOptionsTimeouts">DataAwsVpcDhcpOptionsTimeouts</a> | cdktf.IResolvable

---



