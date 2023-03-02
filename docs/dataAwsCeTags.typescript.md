# `dataAwsCeTags` Submodule <a name="`dataAwsCeTags` Submodule" id="@cdktf/provider-aws.dataAwsCeTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCeTags <a name="DataAwsCeTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ce_tags aws_ce_tags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTags(scope: Construct, id: string, config: DataAwsCeTagsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig">DataAwsCeTagsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig">DataAwsCeTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy">putSortBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod">putTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSearchString">resetSearchString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetTagKey">resetTagKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter"></a>

```typescript
public putFilter(value: DataAwsCeTagsFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---

##### `putSortBy` <a name="putSortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy"></a>

```typescript
public putSortBy(value: IResolvable | DataAwsCeTagsSortBy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]

---

##### `putTimePeriod` <a name="putTimePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod"></a>

```typescript
public putTimePeriod(value: DataAwsCeTagsTimePeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSearchString` <a name="resetSearchString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSearchString"></a>

```typescript
public resetSearchString(): void
```

##### `resetSortBy` <a name="resetSortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

dataAwsCeTags.DataAwsCeTags.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

dataAwsCeTags.DataAwsCeTags.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

dataAwsCeTags.DataAwsCeTags.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference">DataAwsCeTagsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortBy">sortBy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList">DataAwsCeTagsSortByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference">DataAwsCeTagsTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchStringInput">searchStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortByInput">sortByInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriodInput">timePeriodInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchString">searchString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filter"></a>

```typescript
public readonly filter: DataAwsCeTagsFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference">DataAwsCeTagsFilterOutputReference</a>

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortBy"></a>

```typescript
public readonly sortBy: DataAwsCeTagsSortByList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList">DataAwsCeTagsSortByList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriod"></a>

```typescript
public readonly timePeriod: DataAwsCeTagsTimePeriodOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference">DataAwsCeTagsTimePeriodOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filterInput"></a>

```typescript
public readonly filterInput: DataAwsCeTagsFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `searchStringInput`<sup>Optional</sup> <a name="searchStringInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchStringInput"></a>

```typescript
public readonly searchStringInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortByInput"></a>

```typescript
public readonly sortByInput: IResolvable | DataAwsCeTagsSortBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `timePeriodInput`<sup>Optional</sup> <a name="timePeriodInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriodInput"></a>

```typescript
public readonly timePeriodInput: DataAwsCeTagsTimePeriod;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `searchString`<sup>Required</sup> <a name="searchString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchString"></a>

```typescript
public readonly searchString: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCeTagsConfig <a name="DataAwsCeTagsConfig" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsConfig: dataAwsCeTags.DataAwsCeTagsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.searchString">searchString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.sortBy">sortBy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]</code> | sort_by block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.timePeriod"></a>

```typescript
public readonly timePeriod: DataAwsCeTagsTimePeriod;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#time_period DataAwsCeTags#time_period}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.filter"></a>

```typescript
public readonly filter: DataAwsCeTagsFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#filter DataAwsCeTags#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `searchString`<sup>Optional</sup> <a name="searchString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.searchString"></a>

```typescript
public readonly searchString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: IResolvable | DataAwsCeTagsSortBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]

sort_by block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_by DataAwsCeTags#sort_by}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}.

---

### DataAwsCeTagsFilter <a name="DataAwsCeTagsFilter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilter: dataAwsCeTags.DataAwsCeTagsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.and">and</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]</code> | and block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.or">or</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]</code> | or block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | tags block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.and"></a>

```typescript
public readonly and: IResolvable | DataAwsCeTagsFilterAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#and DataAwsCeTags#and}

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.costCategory"></a>

```typescript
public readonly costCategory: DataAwsCeTagsFilterCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.dimension"></a>

```typescript
public readonly dimension: DataAwsCeTagsFilterDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.not"></a>

```typescript
public readonly not: DataAwsCeTagsFilterNot;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#not DataAwsCeTags#not}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.or"></a>

```typescript
public readonly or: IResolvable | DataAwsCeTagsFilterOr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#or DataAwsCeTags#or}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.tags"></a>

```typescript
public readonly tags: DataAwsCeTagsFilterTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterAnd <a name="DataAwsCeTagsFilterAnd" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterAnd: dataAwsCeTags.DataAwsCeTagsFilterAnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.costCategory"></a>

```typescript
public readonly costCategory: DataAwsCeTagsFilterAndCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.dimension"></a>

```typescript
public readonly dimension: DataAwsCeTagsFilterAndDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.tags"></a>

```typescript
public readonly tags: DataAwsCeTagsFilterAndTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterAndCostCategory <a name="DataAwsCeTagsFilterAndCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterAndCostCategory: dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterAndDimension <a name="DataAwsCeTagsFilterAndDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterAndDimension: dataAwsCeTags.DataAwsCeTagsFilterAndDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterAndTags <a name="DataAwsCeTagsFilterAndTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterAndTags: dataAwsCeTags.DataAwsCeTagsFilterAndTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterCostCategory <a name="DataAwsCeTagsFilterCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterCostCategory: dataAwsCeTags.DataAwsCeTagsFilterCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterDimension <a name="DataAwsCeTagsFilterDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterDimension: dataAwsCeTags.DataAwsCeTagsFilterDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNot <a name="DataAwsCeTagsFilterNot" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterNot: dataAwsCeTags.DataAwsCeTagsFilterNot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.costCategory"></a>

```typescript
public readonly costCategory: DataAwsCeTagsFilterNotCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.dimension"></a>

```typescript
public readonly dimension: DataAwsCeTagsFilterNotDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.tags"></a>

```typescript
public readonly tags: DataAwsCeTagsFilterNotTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterNotCostCategory <a name="DataAwsCeTagsFilterNotCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterNotCostCategory: dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNotDimension <a name="DataAwsCeTagsFilterNotDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterNotDimension: dataAwsCeTags.DataAwsCeTagsFilterNotDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNotTags <a name="DataAwsCeTagsFilterNotTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterNotTags: dataAwsCeTags.DataAwsCeTagsFilterNotTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOr <a name="DataAwsCeTagsFilterOr" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterOr: dataAwsCeTags.DataAwsCeTagsFilterOr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.costCategory"></a>

```typescript
public readonly costCategory: DataAwsCeTagsFilterOrCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.dimension"></a>

```typescript
public readonly dimension: DataAwsCeTagsFilterOrDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.tags"></a>

```typescript
public readonly tags: DataAwsCeTagsFilterOrTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterOrCostCategory <a name="DataAwsCeTagsFilterOrCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterOrCostCategory: dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOrDimension <a name="DataAwsCeTagsFilterOrDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterOrDimension: dataAwsCeTags.DataAwsCeTagsFilterOrDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOrTags <a name="DataAwsCeTagsFilterOrTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterOrTags: dataAwsCeTags.DataAwsCeTagsFilterOrTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterTags <a name="DataAwsCeTagsFilterTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsFilterTags: dataAwsCeTags.DataAwsCeTagsFilterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsSortBy <a name="DataAwsCeTagsSortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsSortBy: dataAwsCeTags.DataAwsCeTagsSortBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_order DataAwsCeTags#sort_order}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_order DataAwsCeTags#sort_order}.

---

### DataAwsCeTagsTimePeriod <a name="DataAwsCeTagsTimePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

const dataAwsCeTagsTimePeriod: dataAwsCeTags.DataAwsCeTagsTimePeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#end DataAwsCeTags#end}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#start DataAwsCeTags#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#end DataAwsCeTags#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#start DataAwsCeTags#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCeTagsFilterAndCostCategoryOutputReference <a name="DataAwsCeTagsFilterAndCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterAndCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---


### DataAwsCeTagsFilterAndDimensionOutputReference <a name="DataAwsCeTagsFilterAndDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterAndDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---


### DataAwsCeTagsFilterAndList <a name="DataAwsCeTagsFilterAndList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get"></a>

```typescript
public get(index: number): DataAwsCeTagsFilterAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsCeTagsFilterAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]

---


### DataAwsCeTagsFilterAndOutputReference <a name="DataAwsCeTagsFilterAndOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: DataAwsCeTagsFilterAndCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension"></a>

```typescript
public putDimension(value: DataAwsCeTagsFilterAndDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags"></a>

```typescript
public putTags(value: DataAwsCeTagsFilterAndTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference">DataAwsCeTagsFilterAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference">DataAwsCeTagsFilterAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference">DataAwsCeTagsFilterAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: DataAwsCeTagsFilterAndCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference">DataAwsCeTagsFilterAndCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimension"></a>

```typescript
public readonly dimension: DataAwsCeTagsFilterAndDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference">DataAwsCeTagsFilterAndDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsCeTagsFilterAndTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference">DataAwsCeTagsFilterAndTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: DataAwsCeTagsFilterAndCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: DataAwsCeTagsFilterAndDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: DataAwsCeTagsFilterAndTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterAnd | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a> | cdktf.IResolvable

---


### DataAwsCeTagsFilterAndTagsOutputReference <a name="DataAwsCeTagsFilterAndTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterAndTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---


### DataAwsCeTagsFilterCostCategoryOutputReference <a name="DataAwsCeTagsFilterCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---


### DataAwsCeTagsFilterDimensionOutputReference <a name="DataAwsCeTagsFilterDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---


### DataAwsCeTagsFilterNotCostCategoryOutputReference <a name="DataAwsCeTagsFilterNotCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterNotCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---


### DataAwsCeTagsFilterNotDimensionOutputReference <a name="DataAwsCeTagsFilterNotDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterNotDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---


### DataAwsCeTagsFilterNotOutputReference <a name="DataAwsCeTagsFilterNotOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: DataAwsCeTagsFilterNotCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension"></a>

```typescript
public putDimension(value: DataAwsCeTagsFilterNotDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags"></a>

```typescript
public putTags(value: DataAwsCeTagsFilterNotTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference">DataAwsCeTagsFilterNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference">DataAwsCeTagsFilterNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference">DataAwsCeTagsFilterNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: DataAwsCeTagsFilterNotCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference">DataAwsCeTagsFilterNotCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimension"></a>

```typescript
public readonly dimension: DataAwsCeTagsFilterNotDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference">DataAwsCeTagsFilterNotDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsCeTagsFilterNotTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference">DataAwsCeTagsFilterNotTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: DataAwsCeTagsFilterNotCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: DataAwsCeTagsFilterNotDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: DataAwsCeTagsFilterNotTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterNot;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---


### DataAwsCeTagsFilterNotTagsOutputReference <a name="DataAwsCeTagsFilterNotTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterNotTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---


### DataAwsCeTagsFilterOrCostCategoryOutputReference <a name="DataAwsCeTagsFilterOrCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterOrCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---


### DataAwsCeTagsFilterOrDimensionOutputReference <a name="DataAwsCeTagsFilterOrDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterOrDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---


### DataAwsCeTagsFilterOrList <a name="DataAwsCeTagsFilterOrList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterOrList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get"></a>

```typescript
public get(index: number): DataAwsCeTagsFilterOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsCeTagsFilterOr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]

---


### DataAwsCeTagsFilterOrOutputReference <a name="DataAwsCeTagsFilterOrOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: DataAwsCeTagsFilterOrCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension"></a>

```typescript
public putDimension(value: DataAwsCeTagsFilterOrDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags"></a>

```typescript
public putTags(value: DataAwsCeTagsFilterOrTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference">DataAwsCeTagsFilterOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference">DataAwsCeTagsFilterOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference">DataAwsCeTagsFilterOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: DataAwsCeTagsFilterOrCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference">DataAwsCeTagsFilterOrCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimension"></a>

```typescript
public readonly dimension: DataAwsCeTagsFilterOrDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference">DataAwsCeTagsFilterOrDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsCeTagsFilterOrTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference">DataAwsCeTagsFilterOrTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: DataAwsCeTagsFilterOrCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: DataAwsCeTagsFilterOrDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: DataAwsCeTagsFilterOrTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterOr | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a> | cdktf.IResolvable

---


### DataAwsCeTagsFilterOrTagsOutputReference <a name="DataAwsCeTagsFilterOrTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterOrTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---


### DataAwsCeTagsFilterOutputReference <a name="DataAwsCeTagsFilterOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot">putNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr">putOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetAnd">resetAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetNot">resetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetOr">resetOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd"></a>

```typescript
public putAnd(value: IResolvable | DataAwsCeTagsFilterAnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]

---

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: DataAwsCeTagsFilterCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension"></a>

```typescript
public putDimension(value: DataAwsCeTagsFilterDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---

##### `putNot` <a name="putNot" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot"></a>

```typescript
public putNot(value: DataAwsCeTagsFilterNot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---

##### `putOr` <a name="putOr" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr"></a>

```typescript
public putOr(value: IResolvable | DataAwsCeTagsFilterOr[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags"></a>

```typescript
public putTags(value: DataAwsCeTagsFilterTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetAnd"></a>

```typescript
public resetAnd(): void
```

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetNot` <a name="resetNot" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetNot"></a>

```typescript
public resetNot(): void
```

##### `resetOr` <a name="resetOr" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetOr"></a>

```typescript
public resetOr(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList">DataAwsCeTagsFilterAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference">DataAwsCeTagsFilterCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference">DataAwsCeTagsFilterDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference">DataAwsCeTagsFilterNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.or">or</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList">DataAwsCeTagsFilterOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference">DataAwsCeTagsFilterTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.andInput">andInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.notInput">notInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.orInput">orInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.and"></a>

```typescript
public readonly and: DataAwsCeTagsFilterAndList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList">DataAwsCeTagsFilterAndList</a>

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: DataAwsCeTagsFilterCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference">DataAwsCeTagsFilterCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimension"></a>

```typescript
public readonly dimension: DataAwsCeTagsFilterDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference">DataAwsCeTagsFilterDimensionOutputReference</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.not"></a>

```typescript
public readonly not: DataAwsCeTagsFilterNotOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference">DataAwsCeTagsFilterNotOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.or"></a>

```typescript
public readonly or: DataAwsCeTagsFilterOrList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList">DataAwsCeTagsFilterOrList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsCeTagsFilterTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference">DataAwsCeTagsFilterTagsOutputReference</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.andInput"></a>

```typescript
public readonly andInput: IResolvable | DataAwsCeTagsFilterAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: DataAwsCeTagsFilterCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: DataAwsCeTagsFilterDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---

##### `notInput`<sup>Optional</sup> <a name="notInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.notInput"></a>

```typescript
public readonly notInput: DataAwsCeTagsFilterNot;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---

##### `orInput`<sup>Optional</sup> <a name="orInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.orInput"></a>

```typescript
public readonly orInput: IResolvable | DataAwsCeTagsFilterOr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: DataAwsCeTagsFilterTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilter;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---


### DataAwsCeTagsFilterTagsOutputReference <a name="DataAwsCeTagsFilterTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsFilterTags;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---


### DataAwsCeTagsSortByList <a name="DataAwsCeTagsSortByList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsSortByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get"></a>

```typescript
public get(index: number): DataAwsCeTagsSortByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsCeTagsSortBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]

---


### DataAwsCeTagsSortByOutputReference <a name="DataAwsCeTagsSortByOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsSortByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetSortOrder">resetSortOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsSortBy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a> | cdktf.IResolvable

---


### DataAwsCeTagsTimePeriodOutputReference <a name="DataAwsCeTagsTimePeriodOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsCeTags } from '@cdktf/provider-aws'

new dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCeTagsTimePeriod;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---



