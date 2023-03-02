# `dataAwsEc2SpotPrice` Submodule <a name="`dataAwsEc2SpotPrice` Submodule" id="@cdktf/provider-aws.dataAwsEc2SpotPrice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2SpotPrice <a name="DataAwsEc2SpotPrice" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price aws_ec2_spot_price}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.Initializer"></a>

```typescript
import { dataAwsEc2SpotPrice } from '@cdktf/provider-aws'

new dataAwsEc2SpotPrice.DataAwsEc2SpotPrice(scope: Construct, id: string, config?: DataAwsEc2SpotPriceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig">DataAwsEc2SpotPriceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig">DataAwsEc2SpotPriceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2SpotPriceFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter">DataAwsEc2SpotPriceFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsEc2SpotPriceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts">DataAwsEc2SpotPriceTimeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isConstruct"></a>

```typescript
import { dataAwsEc2SpotPrice } from '@cdktf/provider-aws'

dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isTerraformElement"></a>

```typescript
import { dataAwsEc2SpotPrice } from '@cdktf/provider-aws'

dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2SpotPrice } from '@cdktf/provider-aws'

dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList">DataAwsEc2SpotPriceFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.spotPrice">spotPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.spotPriceTimestamp">spotPriceTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference">DataAwsEc2SpotPriceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter">DataAwsEc2SpotPriceFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts">DataAwsEc2SpotPriceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2SpotPriceFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList">DataAwsEc2SpotPriceFilterList</a>

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

---

##### `spotPriceTimestamp`<sup>Required</sup> <a name="spotPriceTimestamp" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.spotPriceTimestamp"></a>

```typescript
public readonly spotPriceTimestamp: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2SpotPriceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference">DataAwsEc2SpotPriceTimeoutsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2SpotPriceFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter">DataAwsEc2SpotPriceFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsEc2SpotPriceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts">DataAwsEc2SpotPriceTimeouts</a> | cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPrice.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2SpotPriceConfig <a name="DataAwsEc2SpotPriceConfig" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.Initializer"></a>

```typescript
import { dataAwsEc2SpotPrice } from '@cdktf/provider-aws'

const dataAwsEc2SpotPriceConfig: dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#availability_zone DataAwsEc2SpotPrice#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter">DataAwsEc2SpotPriceFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#id DataAwsEc2SpotPrice#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#instance_type DataAwsEc2SpotPrice#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts">DataAwsEc2SpotPriceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#availability_zone DataAwsEc2SpotPrice#availability_zone}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2SpotPriceFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter">DataAwsEc2SpotPriceFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#filter DataAwsEc2SpotPrice#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#id DataAwsEc2SpotPrice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#instance_type DataAwsEc2SpotPrice#instance_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEc2SpotPriceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts">DataAwsEc2SpotPriceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#timeouts DataAwsEc2SpotPrice#timeouts}

---

### DataAwsEc2SpotPriceFilter <a name="DataAwsEc2SpotPriceFilter" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter.Initializer"></a>

```typescript
import { dataAwsEc2SpotPrice } from '@cdktf/provider-aws'

const dataAwsEc2SpotPriceFilter: dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#name DataAwsEc2SpotPrice#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#values DataAwsEc2SpotPrice#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#name DataAwsEc2SpotPrice#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#values DataAwsEc2SpotPrice#values}.

---

### DataAwsEc2SpotPriceTimeouts <a name="DataAwsEc2SpotPriceTimeouts" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts.Initializer"></a>

```typescript
import { dataAwsEc2SpotPrice } from '@cdktf/provider-aws'

const dataAwsEc2SpotPriceTimeouts: dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#read DataAwsEc2SpotPrice#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price#read DataAwsEc2SpotPrice#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2SpotPriceFilterList <a name="DataAwsEc2SpotPriceFilterList" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.Initializer"></a>

```typescript
import { dataAwsEc2SpotPrice } from '@cdktf/provider-aws'

new dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2SpotPriceFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter">DataAwsEc2SpotPriceFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2SpotPriceFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter">DataAwsEc2SpotPriceFilter</a>[]

---


### DataAwsEc2SpotPriceFilterOutputReference <a name="DataAwsEc2SpotPriceFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2SpotPrice } from '@cdktf/provider-aws'

new dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter">DataAwsEc2SpotPriceFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2SpotPriceFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceFilter">DataAwsEc2SpotPriceFilter</a> | cdktf.IResolvable

---


### DataAwsEc2SpotPriceTimeoutsOutputReference <a name="DataAwsEc2SpotPriceTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2SpotPrice } from '@cdktf/provider-aws'

new dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts">DataAwsEc2SpotPriceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2SpotPriceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2SpotPrice.DataAwsEc2SpotPriceTimeouts">DataAwsEc2SpotPriceTimeouts</a> | cdktf.IResolvable

---



