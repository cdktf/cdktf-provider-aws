# `dataAwsVpcIpamPoolCidrs` Submodule <a name="`dataAwsVpcIpamPoolCidrs` Submodule" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpamPoolCidrs <a name="DataAwsVpcIpamPoolCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs aws_vpc_ipam_pool_cidrs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

new dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs(scope: Construct, id: string, config: DataAwsVpcIpamPoolCidrsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig">DataAwsVpcIpamPoolCidrsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig">DataAwsVpcIpamPoolCidrsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsVpcIpamPoolCidrsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsVpcIpamPoolCidrsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isConstruct"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformElement"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformDataSource"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList">DataAwsVpcIpamPoolCidrsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolCidrs">ipamPoolCidrs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList">DataAwsVpcIpamPoolCidrsIpamPoolCidrsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference">DataAwsVpcIpamPoolCidrsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolIdInput">ipamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filter"></a>

```typescript
public readonly filter: DataAwsVpcIpamPoolCidrsFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList">DataAwsVpcIpamPoolCidrsFilterList</a>

---

##### `ipamPoolCidrs`<sup>Required</sup> <a name="ipamPoolCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolCidrs"></a>

```typescript
public readonly ipamPoolCidrs: DataAwsVpcIpamPoolCidrsIpamPoolCidrsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList">DataAwsVpcIpamPoolCidrsIpamPoolCidrsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsVpcIpamPoolCidrsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference">DataAwsVpcIpamPoolCidrsTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsVpcIpamPoolCidrsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipamPoolIdInput`<sup>Optional</sup> <a name="ipamPoolIdInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolIdInput"></a>

```typescript
public readonly ipamPoolIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsVpcIpamPoolCidrsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamPoolCidrsConfig <a name="DataAwsVpcIpamPoolCidrsConfig" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.Initializer"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

const dataAwsVpcIpamPoolCidrsConfig: dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#ipam_pool_id DataAwsVpcIpamPoolCidrs#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#id DataAwsVpcIpamPoolCidrs#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#ipam_pool_id DataAwsVpcIpamPoolCidrs#ipam_pool_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsVpcIpamPoolCidrsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#filter DataAwsVpcIpamPoolCidrs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#id DataAwsVpcIpamPoolCidrs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsVpcIpamPoolCidrsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#timeouts DataAwsVpcIpamPoolCidrs#timeouts}

---

### DataAwsVpcIpamPoolCidrsFilter <a name="DataAwsVpcIpamPoolCidrsFilter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.Initializer"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

const dataAwsVpcIpamPoolCidrsFilter: dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#name DataAwsVpcIpamPoolCidrs#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#values DataAwsVpcIpamPoolCidrs#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#name DataAwsVpcIpamPoolCidrs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#values DataAwsVpcIpamPoolCidrs#values}.

---

### DataAwsVpcIpamPoolCidrsIpamPoolCidrs <a name="DataAwsVpcIpamPoolCidrsIpamPoolCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs.Initializer"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

const dataAwsVpcIpamPoolCidrsIpamPoolCidrs: dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs = { ... }
```


### DataAwsVpcIpamPoolCidrsTimeouts <a name="DataAwsVpcIpamPoolCidrsTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts.Initializer"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

const dataAwsVpcIpamPoolCidrsTimeouts: dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#read DataAwsVpcIpamPoolCidrs#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#read DataAwsVpcIpamPoolCidrs#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamPoolCidrsFilterList <a name="DataAwsVpcIpamPoolCidrsFilterList" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

new dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.get"></a>

```typescript
public get(index: number): DataAwsVpcIpamPoolCidrsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsVpcIpamPoolCidrsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>[]

---


### DataAwsVpcIpamPoolCidrsFilterOutputReference <a name="DataAwsVpcIpamPoolCidrsFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

new dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcIpamPoolCidrsFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a> | cdktf.IResolvable

---


### DataAwsVpcIpamPoolCidrsIpamPoolCidrsList <a name="DataAwsVpcIpamPoolCidrsIpamPoolCidrsList" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

new dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.get"></a>

```typescript
public get(index: number): DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference <a name="DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

new dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs">DataAwsVpcIpamPoolCidrsIpamPoolCidrs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcIpamPoolCidrsIpamPoolCidrs;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs">DataAwsVpcIpamPoolCidrsIpamPoolCidrs</a>

---


### DataAwsVpcIpamPoolCidrsTimeoutsOutputReference <a name="DataAwsVpcIpamPoolCidrsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcIpamPoolCidrs } from '@cdktf/provider-aws'

new dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcIpamPoolCidrsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a> | cdktf.IResolvable

---



