# `dataAwsEmrReleaseLabels` Submodule <a name="`dataAwsEmrReleaseLabels` Submodule" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEmrReleaseLabels <a name="DataAwsEmrReleaseLabels" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels aws_emr_release_labels}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer"></a>

```typescript
import { dataAwsEmrReleaseLabels } from '@cdktf/provider-aws'

new dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels(scope: Construct, id: string, config?: DataAwsEmrReleaseLabelsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig">DataAwsEmrReleaseLabelsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig">DataAwsEmrReleaseLabelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilters` <a name="putFilters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters"></a>

```typescript
public putFilters(value: DataAwsEmrReleaseLabelsFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

---

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct"></a>

```typescript
import { dataAwsEmrReleaseLabels } from '@cdktf/provider-aws'

dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement"></a>

```typescript
import { dataAwsEmrReleaseLabels } from '@cdktf/provider-aws'

dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource"></a>

```typescript
import { dataAwsEmrReleaseLabels } from '@cdktf/provider-aws'

dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference">DataAwsEmrReleaseLabelsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.releaseLabels">releaseLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filtersInput">filtersInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filters"></a>

```typescript
public readonly filters: DataAwsEmrReleaseLabelsFiltersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference">DataAwsEmrReleaseLabelsFiltersOutputReference</a>

---

##### `releaseLabels`<sup>Required</sup> <a name="releaseLabels" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.releaseLabels"></a>

```typescript
public readonly releaseLabels: string[];
```

- *Type:* string[]

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filtersInput"></a>

```typescript
public readonly filtersInput: DataAwsEmrReleaseLabelsFilters;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEmrReleaseLabelsConfig <a name="DataAwsEmrReleaseLabelsConfig" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.Initializer"></a>

```typescript
import { dataAwsEmrReleaseLabels } from '@cdktf/provider-aws'

const dataAwsEmrReleaseLabelsConfig: dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#id DataAwsEmrReleaseLabels#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.filters"></a>

```typescript
public readonly filters: DataAwsEmrReleaseLabelsFilters;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#filters DataAwsEmrReleaseLabels#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#id DataAwsEmrReleaseLabels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsEmrReleaseLabelsFilters <a name="DataAwsEmrReleaseLabelsFilters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.Initializer"></a>

```typescript
import { dataAwsEmrReleaseLabels } from '@cdktf/provider-aws'

const dataAwsEmrReleaseLabelsFilters: dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.application">application</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#application DataAwsEmrReleaseLabels#application}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#prefix DataAwsEmrReleaseLabels#prefix}. |

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#application DataAwsEmrReleaseLabels#application}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#prefix DataAwsEmrReleaseLabels#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEmrReleaseLabelsFiltersOutputReference <a name="DataAwsEmrReleaseLabelsFiltersOutputReference" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsEmrReleaseLabels } from '@cdktf/provider-aws'

new dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetApplication">resetApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplication` <a name="resetApplication" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetApplication"></a>

```typescript
public resetApplication(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.applicationInput">applicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationInput`<sup>Optional</sup> <a name="applicationInput" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.applicationInput"></a>

```typescript
public readonly applicationInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEmrReleaseLabelsFilters;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

---



