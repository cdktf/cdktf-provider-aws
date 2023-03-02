# `dataAwsEbsSnapshotIds` Submodule <a name="`dataAwsEbsSnapshotIds` Submodule" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEbsSnapshotIds <a name="DataAwsEbsSnapshotIds" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids aws_ebs_snapshot_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer"></a>

```typescript
import { dataAwsEbsSnapshotIds } from '@cdktf/provider-aws'

new dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds(scope: Construct, id: string, config?: DataAwsEbsSnapshotIdsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig">DataAwsEbsSnapshotIdsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig">DataAwsEbsSnapshotIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetOwners">resetOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetRestorableByUserIds">resetRestorableByUserIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEbsSnapshotIdsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsEbsSnapshotIdsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOwners` <a name="resetOwners" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetOwners"></a>

```typescript
public resetOwners(): void
```

##### `resetRestorableByUserIds` <a name="resetRestorableByUserIds" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetRestorableByUserIds"></a>

```typescript
public resetRestorableByUserIds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isConstruct"></a>

```typescript
import { dataAwsEbsSnapshotIds } from '@cdktf/provider-aws'

dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformElement"></a>

```typescript
import { dataAwsEbsSnapshotIds } from '@cdktf/provider-aws'

dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformDataSource"></a>

```typescript
import { dataAwsEbsSnapshotIds } from '@cdktf/provider-aws'

dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList">DataAwsEbsSnapshotIdsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference">DataAwsEbsSnapshotIdsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.ownersInput">ownersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.restorableByUserIdsInput">restorableByUserIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.owners">owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.restorableByUserIds">restorableByUserIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.filter"></a>

```typescript
public readonly filter: DataAwsEbsSnapshotIdsFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList">DataAwsEbsSnapshotIdsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEbsSnapshotIdsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference">DataAwsEbsSnapshotIdsTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEbsSnapshotIdsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ownersInput`<sup>Optional</sup> <a name="ownersInput" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.ownersInput"></a>

```typescript
public readonly ownersInput: string[];
```

- *Type:* string[]

---

##### `restorableByUserIdsInput`<sup>Optional</sup> <a name="restorableByUserIdsInput" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.restorableByUserIdsInput"></a>

```typescript
public readonly restorableByUserIdsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsEbsSnapshotIdsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

---

##### `restorableByUserIds`<sup>Required</sup> <a name="restorableByUserIds" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.restorableByUserIds"></a>

```typescript
public readonly restorableByUserIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEbsSnapshotIdsConfig <a name="DataAwsEbsSnapshotIdsConfig" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.Initializer"></a>

```typescript
import { dataAwsEbsSnapshotIds } from '@cdktf/provider-aws'

const dataAwsEbsSnapshotIdsConfig: dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#id DataAwsEbsSnapshotIds#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.owners">owners</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#owners DataAwsEbsSnapshotIds#owners}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.restorableByUserIds">restorableByUserIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#restorable_by_user_ids DataAwsEbsSnapshotIds#restorable_by_user_ids}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEbsSnapshotIdsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#filter DataAwsEbsSnapshotIds#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#id DataAwsEbsSnapshotIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#owners DataAwsEbsSnapshotIds#owners}.

---

##### `restorableByUserIds`<sup>Optional</sup> <a name="restorableByUserIds" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.restorableByUserIds"></a>

```typescript
public readonly restorableByUserIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#restorable_by_user_ids DataAwsEbsSnapshotIds#restorable_by_user_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsEbsSnapshotIdsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#timeouts DataAwsEbsSnapshotIds#timeouts}

---

### DataAwsEbsSnapshotIdsFilter <a name="DataAwsEbsSnapshotIdsFilter" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter.Initializer"></a>

```typescript
import { dataAwsEbsSnapshotIds } from '@cdktf/provider-aws'

const dataAwsEbsSnapshotIdsFilter: dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#name DataAwsEbsSnapshotIds#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#values DataAwsEbsSnapshotIds#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#name DataAwsEbsSnapshotIds#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#values DataAwsEbsSnapshotIds#values}.

---

### DataAwsEbsSnapshotIdsTimeouts <a name="DataAwsEbsSnapshotIdsTimeouts" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts.Initializer"></a>

```typescript
import { dataAwsEbsSnapshotIds } from '@cdktf/provider-aws'

const dataAwsEbsSnapshotIdsTimeouts: dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#read DataAwsEbsSnapshotIds#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids#read DataAwsEbsSnapshotIds#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEbsSnapshotIdsFilterList <a name="DataAwsEbsSnapshotIdsFilterList" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer"></a>

```typescript
import { dataAwsEbsSnapshotIds } from '@cdktf/provider-aws'

new dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.get"></a>

```typescript
public get(index: number): DataAwsEbsSnapshotIdsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEbsSnapshotIdsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]

---


### DataAwsEbsSnapshotIdsFilterOutputReference <a name="DataAwsEbsSnapshotIdsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEbsSnapshotIds } from '@cdktf/provider-aws'

new dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEbsSnapshotIdsFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a> | cdktf.IResolvable

---


### DataAwsEbsSnapshotIdsTimeoutsOutputReference <a name="DataAwsEbsSnapshotIdsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsEbsSnapshotIds } from '@cdktf/provider-aws'

new dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEbsSnapshotIdsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a> | cdktf.IResolvable

---



