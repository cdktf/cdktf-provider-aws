# `dataAwsDbEventCategories` Submodule <a name="`dataAwsDbEventCategories` Submodule" id="@cdktf/provider-aws.dataAwsDbEventCategories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDbEventCategories <a name="DataAwsDbEventCategories" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/db_event_categories aws_db_event_categories}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.Initializer"></a>

```typescript
import { dataAwsDbEventCategories } from '@cdktf/provider-aws'

new dataAwsDbEventCategories.DataAwsDbEventCategories(scope: Construct, id: string, config?: DataAwsDbEventCategoriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig">DataAwsDbEventCategoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig">DataAwsDbEventCategoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.resetSourceType">resetSourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsDbEventCategories resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.isConstruct"></a>

```typescript
import { dataAwsDbEventCategories } from '@cdktf/provider-aws'

dataAwsDbEventCategories.DataAwsDbEventCategories.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.isTerraformElement"></a>

```typescript
import { dataAwsDbEventCategories } from '@cdktf/provider-aws'

dataAwsDbEventCategories.DataAwsDbEventCategories.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.isTerraformDataSource"></a>

```typescript
import { dataAwsDbEventCategories } from '@cdktf/provider-aws'

dataAwsDbEventCategories.DataAwsDbEventCategories.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.generateConfigForImport"></a>

```typescript
import { dataAwsDbEventCategories } from '@cdktf/provider-aws'

dataAwsDbEventCategories.DataAwsDbEventCategories.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsDbEventCategories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDbEventCategories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDbEventCategories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/db_event_categories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDbEventCategories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.eventCategories">eventCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.eventCategories"></a>

```typescript
public readonly eventCategories: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategories.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDbEventCategoriesConfig <a name="DataAwsDbEventCategoriesConfig" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.Initializer"></a>

```typescript
import { dataAwsDbEventCategories } from '@cdktf/provider-aws'

const dataAwsDbEventCategoriesConfig: dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/db_event_categories#id DataAwsDbEventCategories#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/db_event_categories#source_type DataAwsDbEventCategories#source_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/db_event_categories#id DataAwsDbEventCategories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/db_event_categories#region DataAwsDbEventCategories#region}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktf/provider-aws.dataAwsDbEventCategories.DataAwsDbEventCategoriesConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/db_event_categories#source_type DataAwsDbEventCategories#source_type}.

---



