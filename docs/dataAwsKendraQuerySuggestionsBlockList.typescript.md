# `dataAwsKendraQuerySuggestionsBlockList` Submodule <a name="`dataAwsKendraQuerySuggestionsBlockList` Submodule" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKendraQuerySuggestionsBlockList <a name="DataAwsKendraQuerySuggestionsBlockList" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list aws_kendra_query_suggestions_block_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer"></a>

```typescript
import { dataAwsKendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

new dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList(scope: Construct, id: string, config: DataAwsKendraQuerySuggestionsBlockListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig">DataAwsKendraQuerySuggestionsBlockListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig">DataAwsKendraQuerySuggestionsBlockListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isConstruct"></a>

```typescript
import { dataAwsKendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformElement"></a>

```typescript
import { dataAwsKendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformDataSource"></a>

```typescript
import { dataAwsKendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fileSizeBytes">fileSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.itemCount">itemCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList">DataAwsKendraQuerySuggestionsBlockListSourceS3PathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexIdInput">indexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListIdInput">querySuggestionsBlockListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId">querySuggestionsBlockListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `fileSizeBytes`<sup>Required</sup> <a name="fileSizeBytes" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fileSizeBytes"></a>

```typescript
public readonly fileSizeBytes: number;
```

- *Type:* number

---

##### `itemCount`<sup>Required</sup> <a name="itemCount" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.itemCount"></a>

```typescript
public readonly itemCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.sourceS3Path"></a>

```typescript
public readonly sourceS3Path: DataAwsKendraQuerySuggestionsBlockListSourceS3PathList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList">DataAwsKendraQuerySuggestionsBlockListSourceS3PathList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexIdInput"></a>

```typescript
public readonly indexIdInput: string;
```

- *Type:* string

---

##### `querySuggestionsBlockListIdInput`<sup>Optional</sup> <a name="querySuggestionsBlockListIdInput" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListIdInput"></a>

```typescript
public readonly querySuggestionsBlockListIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `querySuggestionsBlockListId`<sup>Required</sup> <a name="querySuggestionsBlockListId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId"></a>

```typescript
public readonly querySuggestionsBlockListId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKendraQuerySuggestionsBlockListConfig <a name="DataAwsKendraQuerySuggestionsBlockListConfig" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.Initializer"></a>

```typescript
import { dataAwsKendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

const dataAwsKendraQuerySuggestionsBlockListConfig: dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.indexId">indexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#index_id DataAwsKendraQuerySuggestionsBlockList#index_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.querySuggestionsBlockListId">querySuggestionsBlockListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#query_suggestions_block_list_id DataAwsKendraQuerySuggestionsBlockList#query_suggestions_block_list_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#id DataAwsKendraQuerySuggestionsBlockList#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#tags DataAwsKendraQuerySuggestionsBlockList#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#index_id DataAwsKendraQuerySuggestionsBlockList#index_id}.

---

##### `querySuggestionsBlockListId`<sup>Required</sup> <a name="querySuggestionsBlockListId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.querySuggestionsBlockListId"></a>

```typescript
public readonly querySuggestionsBlockListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#query_suggestions_block_list_id DataAwsKendraQuerySuggestionsBlockList#query_suggestions_block_list_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#id DataAwsKendraQuerySuggestionsBlockList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#tags DataAwsKendraQuerySuggestionsBlockList#tags}.

---

### DataAwsKendraQuerySuggestionsBlockListSourceS3Path <a name="DataAwsKendraQuerySuggestionsBlockListSourceS3Path" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path.Initializer"></a>

```typescript
import { dataAwsKendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

const dataAwsKendraQuerySuggestionsBlockListSourceS3Path: dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsKendraQuerySuggestionsBlockListSourceS3PathList <a name="DataAwsKendraQuerySuggestionsBlockListSourceS3PathList" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer"></a>

```typescript
import { dataAwsKendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

new dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.get"></a>

```typescript
public get(index: number): DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference <a name="DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer"></a>

```typescript
import { dataAwsKendraQuerySuggestionsBlockList } from '@cdktf/provider-aws'

new dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path">DataAwsKendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsKendraQuerySuggestionsBlockListSourceS3Path;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path">DataAwsKendraQuerySuggestionsBlockListSourceS3Path</a>

---



