# `dataAwsRdsReservedInstanceOffering` Submodule <a name="`dataAwsRdsReservedInstanceOffering` Submodule" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsReservedInstanceOffering <a name="DataAwsRdsReservedInstanceOffering" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering aws_rds_reserved_instance_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer"></a>

```typescript
import { dataAwsRdsReservedInstanceOffering } from '@cdktf/provider-aws'

new dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering(scope: Construct, id: string, config: DataAwsRdsReservedInstanceOfferingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig">DataAwsRdsReservedInstanceOfferingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig">DataAwsRdsReservedInstanceOfferingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct"></a>

```typescript
import { dataAwsRdsReservedInstanceOffering } from '@cdktf/provider-aws'

dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement"></a>

```typescript
import { dataAwsRdsReservedInstanceOffering } from '@cdktf/provider-aws'

dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource"></a>

```typescript
import { dataAwsRdsReservedInstanceOffering } from '@cdktf/provider-aws'

dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fixedPrice">fixedPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringId">offeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClassInput">dbInstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAzInput">multiAzInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringTypeInput">offeringTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescriptionInput">productDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClass">dbInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAz">multiAz</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringType">offeringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescription">productDescription</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `fixedPrice`<sup>Required</sup> <a name="fixedPrice" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fixedPrice"></a>

```typescript
public readonly fixedPrice: number;
```

- *Type:* number

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringId"></a>

```typescript
public readonly offeringId: string;
```

- *Type:* string

---

##### `dbInstanceClassInput`<sup>Optional</sup> <a name="dbInstanceClassInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClassInput"></a>

```typescript
public readonly dbInstanceClassInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAzInput"></a>

```typescript
public readonly multiAzInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `offeringTypeInput`<sup>Optional</sup> <a name="offeringTypeInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringTypeInput"></a>

```typescript
public readonly offeringTypeInput: string;
```

- *Type:* string

---

##### `productDescriptionInput`<sup>Optional</sup> <a name="productDescriptionInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescriptionInput"></a>

```typescript
public readonly productDescriptionInput: string;
```

- *Type:* string

---

##### `dbInstanceClass`<sup>Required</sup> <a name="dbInstanceClass" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClass"></a>

```typescript
public readonly dbInstanceClass: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `offeringType`<sup>Required</sup> <a name="offeringType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringType"></a>

```typescript
public readonly offeringType: string;
```

- *Type:* string

---

##### `productDescription`<sup>Required</sup> <a name="productDescription" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescription"></a>

```typescript
public readonly productDescription: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsReservedInstanceOfferingConfig <a name="DataAwsRdsReservedInstanceOfferingConfig" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.Initializer"></a>

```typescript
import { dataAwsRdsReservedInstanceOffering } from '@cdktf/provider-aws'

const dataAwsRdsReservedInstanceOfferingConfig: dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dbInstanceClass">dbInstanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.duration">duration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.multiAz">multiAz</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.offeringType">offeringType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.productDescription">productDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbInstanceClass`<sup>Required</sup> <a name="dbInstanceClass" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dbInstanceClass"></a>

```typescript
public readonly dbInstanceClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}.

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}.

---

##### `offeringType`<sup>Required</sup> <a name="offeringType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.offeringType"></a>

```typescript
public readonly offeringType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}.

---

##### `productDescription`<sup>Required</sup> <a name="productDescription" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.productDescription"></a>

```typescript
public readonly productDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



