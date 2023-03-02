# `dataAwsFsxOpenzfsSnapshot` Submodule <a name="`dataAwsFsxOpenzfsSnapshot` Submodule" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxOpenzfsSnapshot <a name="DataAwsFsxOpenzfsSnapshot" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot aws_fsx_openzfs_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer"></a>

```typescript
import { dataAwsFsxOpenzfsSnapshot } from '@cdktf/provider-aws'

new dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot(scope: Construct, id: string, config?: DataAwsFsxOpenzfsSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig">DataAwsFsxOpenzfsSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig">DataAwsFsxOpenzfsSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetSnapshotIds">resetSnapshotIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsFsxOpenzfsSnapshotFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetMostRecent"></a>

```typescript
public resetMostRecent(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSnapshotIds` <a name="resetSnapshotIds" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetSnapshotIds"></a>

```typescript
public resetSnapshotIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct"></a>

```typescript
import { dataAwsFsxOpenzfsSnapshot } from '@cdktf/provider-aws'

dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement"></a>

```typescript
import { dataAwsFsxOpenzfsSnapshot } from '@cdktf/provider-aws'

dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource"></a>

```typescript
import { dataAwsFsxOpenzfsSnapshot } from '@cdktf/provider-aws'

dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList">DataAwsFsxOpenzfsSnapshotFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecentInput">mostRecentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIdsInput">snapshotIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIds">snapshotIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filter"></a>

```typescript
public readonly filter: DataAwsFsxOpenzfsSnapshotFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList">DataAwsFsxOpenzfsSnapshotFilterList</a>

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsFsxOpenzfsSnapshotFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecentInput"></a>

```typescript
public readonly mostRecentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `snapshotIdsInput`<sup>Optional</sup> <a name="snapshotIdsInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIdsInput"></a>

```typescript
public readonly snapshotIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `snapshotIds`<sup>Required</sup> <a name="snapshotIds" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIds"></a>

```typescript
public readonly snapshotIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxOpenzfsSnapshotConfig <a name="DataAwsFsxOpenzfsSnapshotConfig" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.Initializer"></a>

```typescript
import { dataAwsFsxOpenzfsSnapshot } from '@cdktf/provider-aws'

const dataAwsFsxOpenzfsSnapshotConfig: dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.snapshotIds">snapshotIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsFsxOpenzfsSnapshotFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#filter DataAwsFsxOpenzfsSnapshot#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}.

---

##### `snapshotIds`<sup>Optional</sup> <a name="snapshotIds" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.snapshotIds"></a>

```typescript
public readonly snapshotIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}.

---

### DataAwsFsxOpenzfsSnapshotFilter <a name="DataAwsFsxOpenzfsSnapshotFilter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.Initializer"></a>

```typescript
import { dataAwsFsxOpenzfsSnapshot } from '@cdktf/provider-aws'

const dataAwsFsxOpenzfsSnapshotFilter: dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#values DataAwsFsxOpenzfsSnapshot#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#values DataAwsFsxOpenzfsSnapshot#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxOpenzfsSnapshotFilterList <a name="DataAwsFsxOpenzfsSnapshotFilterList" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer"></a>

```typescript
import { dataAwsFsxOpenzfsSnapshot } from '@cdktf/provider-aws'

new dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get"></a>

```typescript
public get(index: number): DataAwsFsxOpenzfsSnapshotFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsFsxOpenzfsSnapshotFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>[]

---


### DataAwsFsxOpenzfsSnapshotFilterOutputReference <a name="DataAwsFsxOpenzfsSnapshotFilterOutputReference" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsFsxOpenzfsSnapshot } from '@cdktf/provider-aws'

new dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsFsxOpenzfsSnapshotFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a> | cdktf.IResolvable

---



