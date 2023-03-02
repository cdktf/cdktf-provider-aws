# `dataAwsS3BucketObjects` Submodule <a name="`dataAwsS3BucketObjects` Submodule" id="@cdktf/provider-aws.dataAwsS3BucketObjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3BucketObjects <a name="DataAwsS3BucketObjects" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects aws_s3_bucket_objects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer"></a>

```typescript
import { dataAwsS3BucketObjects } from '@cdktf/provider-aws'

new dataAwsS3BucketObjects.DataAwsS3BucketObjects(scope: Construct, id: string, config: DataAwsS3BucketObjectsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig">DataAwsS3BucketObjectsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig">DataAwsS3BucketObjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetEncodingType">resetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetFetchOwner">resetFetchOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetMaxKeys">resetMaxKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetStartAfter">resetStartAfter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetEncodingType` <a name="resetEncodingType" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetEncodingType"></a>

```typescript
public resetEncodingType(): void
```

##### `resetFetchOwner` <a name="resetFetchOwner" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetFetchOwner"></a>

```typescript
public resetFetchOwner(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxKeys` <a name="resetMaxKeys" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetMaxKeys"></a>

```typescript
public resetMaxKeys(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetStartAfter` <a name="resetStartAfter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetStartAfter"></a>

```typescript
public resetStartAfter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isConstruct"></a>

```typescript
import { dataAwsS3BucketObjects } from '@cdktf/provider-aws'

dataAwsS3BucketObjects.DataAwsS3BucketObjects.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformElement"></a>

```typescript
import { dataAwsS3BucketObjects } from '@cdktf/provider-aws'

dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformDataSource"></a>

```typescript
import { dataAwsS3BucketObjects } from '@cdktf/provider-aws'

dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.commonPrefixes">commonPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.keys">keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.owners">owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.encodingTypeInput">encodingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fetchOwnerInput">fetchOwnerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.maxKeysInput">maxKeysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.startAfterInput">startAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.encodingType">encodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fetchOwner">fetchOwner</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.maxKeys">maxKeys</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.startAfter">startAfter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `commonPrefixes`<sup>Required</sup> <a name="commonPrefixes" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.commonPrefixes"></a>

```typescript
public readonly commonPrefixes: string[];
```

- *Type:* string[]

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `encodingTypeInput`<sup>Optional</sup> <a name="encodingTypeInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.encodingTypeInput"></a>

```typescript
public readonly encodingTypeInput: string;
```

- *Type:* string

---

##### `fetchOwnerInput`<sup>Optional</sup> <a name="fetchOwnerInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fetchOwnerInput"></a>

```typescript
public readonly fetchOwnerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxKeysInput`<sup>Optional</sup> <a name="maxKeysInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.maxKeysInput"></a>

```typescript
public readonly maxKeysInput: number;
```

- *Type:* number

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `startAfterInput`<sup>Optional</sup> <a name="startAfterInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.startAfterInput"></a>

```typescript
public readonly startAfterInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `encodingType`<sup>Required</sup> <a name="encodingType" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.encodingType"></a>

```typescript
public readonly encodingType: string;
```

- *Type:* string

---

##### `fetchOwner`<sup>Required</sup> <a name="fetchOwner" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fetchOwner"></a>

```typescript
public readonly fetchOwner: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxKeys`<sup>Required</sup> <a name="maxKeys" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.maxKeys"></a>

```typescript
public readonly maxKeys: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `startAfter`<sup>Required</sup> <a name="startAfter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.startAfter"></a>

```typescript
public readonly startAfter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3BucketObjectsConfig <a name="DataAwsS3BucketObjectsConfig" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.Initializer"></a>

```typescript
import { dataAwsS3BucketObjects } from '@cdktf/provider-aws'

const dataAwsS3BucketObjectsConfig: dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#bucket DataAwsS3BucketObjects#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.delimiter">delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#delimiter DataAwsS3BucketObjects#delimiter}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.encodingType">encodingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#encoding_type DataAwsS3BucketObjects#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.fetchOwner">fetchOwner</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#fetch_owner DataAwsS3BucketObjects#fetch_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#id DataAwsS3BucketObjects#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.maxKeys">maxKeys</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#max_keys DataAwsS3BucketObjects#max_keys}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#prefix DataAwsS3BucketObjects#prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.startAfter">startAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#start_after DataAwsS3BucketObjects#start_after}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#bucket DataAwsS3BucketObjects#bucket}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#delimiter DataAwsS3BucketObjects#delimiter}.

---

##### `encodingType`<sup>Optional</sup> <a name="encodingType" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.encodingType"></a>

```typescript
public readonly encodingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#encoding_type DataAwsS3BucketObjects#encoding_type}.

---

##### `fetchOwner`<sup>Optional</sup> <a name="fetchOwner" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.fetchOwner"></a>

```typescript
public readonly fetchOwner: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#fetch_owner DataAwsS3BucketObjects#fetch_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#id DataAwsS3BucketObjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxKeys`<sup>Optional</sup> <a name="maxKeys" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.maxKeys"></a>

```typescript
public readonly maxKeys: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#max_keys DataAwsS3BucketObjects#max_keys}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#prefix DataAwsS3BucketObjects#prefix}.

---

##### `startAfter`<sup>Optional</sup> <a name="startAfter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.startAfter"></a>

```typescript
public readonly startAfter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#start_after DataAwsS3BucketObjects#start_after}.

---



