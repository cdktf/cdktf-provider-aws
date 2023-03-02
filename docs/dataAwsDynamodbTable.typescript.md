# `dataAwsDynamodbTable` Submodule <a name="`dataAwsDynamodbTable` Submodule" id="@cdktf/provider-aws.dataAwsDynamodbTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDynamodbTable <a name="DataAwsDynamodbTable" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table aws_dynamodb_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTable(scope: Construct, id: string, config: DataAwsDynamodbTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig">DataAwsDynamodbTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig">DataAwsDynamodbTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.putServerSideEncryption">putServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putServerSideEncryption` <a name="putServerSideEncryption" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.putServerSideEncryption"></a>

```typescript
public putServerSideEncryption(value: DataAwsDynamodbTableServerSideEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.putServerSideEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetServerSideEncryption"></a>

```typescript
public resetServerSideEncryption(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isConstruct"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

dataAwsDynamodbTable.DataAwsDynamodbTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformElement"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformDataSource"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList">DataAwsDynamodbTableAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.billingMode">billingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.globalSecondaryIndex">globalSecondaryIndex</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList">DataAwsDynamodbTableGlobalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.hashKey">hashKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.localSecondaryIndex">localSecondaryIndex</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList">DataAwsDynamodbTableLocalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList">DataAwsDynamodbTablePointInTimeRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.rangeKey">rangeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.readCapacity">readCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.replica">replica</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList">DataAwsDynamodbTableReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.serverSideEncryption">serverSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference">DataAwsDynamodbTableServerSideEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamEnabled">streamEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamLabel">streamLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamViewType">streamViewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tableClass">tableClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList">DataAwsDynamodbTableTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.writeCapacity">writeCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.attribute"></a>

```typescript
public readonly attribute: DataAwsDynamodbTableAttributeList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList">DataAwsDynamodbTableAttributeList</a>

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.billingMode"></a>

```typescript
public readonly billingMode: string;
```

- *Type:* string

---

##### `globalSecondaryIndex`<sup>Required</sup> <a name="globalSecondaryIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.globalSecondaryIndex"></a>

```typescript
public readonly globalSecondaryIndex: DataAwsDynamodbTableGlobalSecondaryIndexList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList">DataAwsDynamodbTableGlobalSecondaryIndexList</a>

---

##### `hashKey`<sup>Required</sup> <a name="hashKey" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.hashKey"></a>

```typescript
public readonly hashKey: string;
```

- *Type:* string

---

##### `localSecondaryIndex`<sup>Required</sup> <a name="localSecondaryIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.localSecondaryIndex"></a>

```typescript
public readonly localSecondaryIndex: DataAwsDynamodbTableLocalSecondaryIndexList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList">DataAwsDynamodbTableLocalSecondaryIndexList</a>

---

##### `pointInTimeRecovery`<sup>Required</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.pointInTimeRecovery"></a>

```typescript
public readonly pointInTimeRecovery: DataAwsDynamodbTablePointInTimeRecoveryList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList">DataAwsDynamodbTablePointInTimeRecoveryList</a>

---

##### `rangeKey`<sup>Required</sup> <a name="rangeKey" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.rangeKey"></a>

```typescript
public readonly rangeKey: string;
```

- *Type:* string

---

##### `readCapacity`<sup>Required</sup> <a name="readCapacity" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.readCapacity"></a>

```typescript
public readonly readCapacity: number;
```

- *Type:* number

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.replica"></a>

```typescript
public readonly replica: DataAwsDynamodbTableReplicaList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList">DataAwsDynamodbTableReplicaList</a>

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: DataAwsDynamodbTableServerSideEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference">DataAwsDynamodbTableServerSideEncryptionOutputReference</a>

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `streamEnabled`<sup>Required</sup> <a name="streamEnabled" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamEnabled"></a>

```typescript
public readonly streamEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `streamLabel`<sup>Required</sup> <a name="streamLabel" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamLabel"></a>

```typescript
public readonly streamLabel: string;
```

- *Type:* string

---

##### `streamViewType`<sup>Required</sup> <a name="streamViewType" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamViewType"></a>

```typescript
public readonly streamViewType: string;
```

- *Type:* string

---

##### `tableClass`<sup>Required</sup> <a name="tableClass" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tableClass"></a>

```typescript
public readonly tableClass: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.ttl"></a>

```typescript
public readonly ttl: DataAwsDynamodbTableTtlList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList">DataAwsDynamodbTableTtlList</a>

---

##### `writeCapacity`<sup>Required</sup> <a name="writeCapacity" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.writeCapacity"></a>

```typescript
public readonly writeCapacity: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.serverSideEncryptionInput"></a>

```typescript
public readonly serverSideEncryptionInput: DataAwsDynamodbTableServerSideEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDynamodbTableAttribute <a name="DataAwsDynamodbTableAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttribute.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

const dataAwsDynamodbTableAttribute: dataAwsDynamodbTable.DataAwsDynamodbTableAttribute = { ... }
```


### DataAwsDynamodbTableConfig <a name="DataAwsDynamodbTableConfig" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

const dataAwsDynamodbTableConfig: dataAwsDynamodbTable.DataAwsDynamodbTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#name DataAwsDynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#id DataAwsDynamodbTable#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#tags DataAwsDynamodbTable#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#name DataAwsDynamodbTable#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#id DataAwsDynamodbTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: DataAwsDynamodbTableServerSideEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#server_side_encryption DataAwsDynamodbTable#server_side_encryption}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#tags DataAwsDynamodbTable#tags}.

---

### DataAwsDynamodbTableGlobalSecondaryIndex <a name="DataAwsDynamodbTableGlobalSecondaryIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndex.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

const dataAwsDynamodbTableGlobalSecondaryIndex: dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndex = { ... }
```


### DataAwsDynamodbTableLocalSecondaryIndex <a name="DataAwsDynamodbTableLocalSecondaryIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndex.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

const dataAwsDynamodbTableLocalSecondaryIndex: dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndex = { ... }
```


### DataAwsDynamodbTablePointInTimeRecovery <a name="DataAwsDynamodbTablePointInTimeRecovery" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecovery.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

const dataAwsDynamodbTablePointInTimeRecovery: dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecovery = { ... }
```


### DataAwsDynamodbTableReplica <a name="DataAwsDynamodbTableReplica" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplica.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

const dataAwsDynamodbTableReplica: dataAwsDynamodbTable.DataAwsDynamodbTableReplica = { ... }
```


### DataAwsDynamodbTableServerSideEncryption <a name="DataAwsDynamodbTableServerSideEncryption" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

const dataAwsDynamodbTableServerSideEncryption: dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption = { ... }
```


### DataAwsDynamodbTableTtl <a name="DataAwsDynamodbTableTtl" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtl.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

const dataAwsDynamodbTableTtl: dataAwsDynamodbTable.DataAwsDynamodbTableTtl = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDynamodbTableAttributeList <a name="DataAwsDynamodbTableAttributeList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.get"></a>

```typescript
public get(index: number): DataAwsDynamodbTableAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDynamodbTableAttributeOutputReference <a name="DataAwsDynamodbTableAttributeOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttribute">DataAwsDynamodbTableAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDynamodbTableAttribute;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttribute">DataAwsDynamodbTableAttribute</a>

---


### DataAwsDynamodbTableGlobalSecondaryIndexList <a name="DataAwsDynamodbTableGlobalSecondaryIndexList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.get"></a>

```typescript
public get(index: number): DataAwsDynamodbTableGlobalSecondaryIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDynamodbTableGlobalSecondaryIndexOutputReference <a name="DataAwsDynamodbTableGlobalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey">hashKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType">projectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey">rangeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity">readCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity">writeCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndex">DataAwsDynamodbTableGlobalSecondaryIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hashKey`<sup>Required</sup> <a name="hashKey" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey"></a>

```typescript
public readonly hashKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```typescript
public readonly nonKeyAttributes: string[];
```

- *Type:* string[]

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType"></a>

```typescript
public readonly projectionType: string;
```

- *Type:* string

---

##### `rangeKey`<sup>Required</sup> <a name="rangeKey" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey"></a>

```typescript
public readonly rangeKey: string;
```

- *Type:* string

---

##### `readCapacity`<sup>Required</sup> <a name="readCapacity" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity"></a>

```typescript
public readonly readCapacity: number;
```

- *Type:* number

---

##### `writeCapacity`<sup>Required</sup> <a name="writeCapacity" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity"></a>

```typescript
public readonly writeCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDynamodbTableGlobalSecondaryIndex;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndex">DataAwsDynamodbTableGlobalSecondaryIndex</a>

---


### DataAwsDynamodbTableLocalSecondaryIndexList <a name="DataAwsDynamodbTableLocalSecondaryIndexList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.get"></a>

```typescript
public get(index: number): DataAwsDynamodbTableLocalSecondaryIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDynamodbTableLocalSecondaryIndexOutputReference <a name="DataAwsDynamodbTableLocalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.projectionType">projectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey">rangeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndex">DataAwsDynamodbTableLocalSecondaryIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```typescript
public readonly nonKeyAttributes: string[];
```

- *Type:* string[]

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.projectionType"></a>

```typescript
public readonly projectionType: string;
```

- *Type:* string

---

##### `rangeKey`<sup>Required</sup> <a name="rangeKey" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey"></a>

```typescript
public readonly rangeKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDynamodbTableLocalSecondaryIndex;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndex">DataAwsDynamodbTableLocalSecondaryIndex</a>

---


### DataAwsDynamodbTablePointInTimeRecoveryList <a name="DataAwsDynamodbTablePointInTimeRecoveryList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.get"></a>

```typescript
public get(index: number): DataAwsDynamodbTablePointInTimeRecoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDynamodbTablePointInTimeRecoveryOutputReference <a name="DataAwsDynamodbTablePointInTimeRecoveryOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecovery">DataAwsDynamodbTablePointInTimeRecovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDynamodbTablePointInTimeRecovery;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecovery">DataAwsDynamodbTablePointInTimeRecovery</a>

---


### DataAwsDynamodbTableReplicaList <a name="DataAwsDynamodbTableReplicaList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.get"></a>

```typescript
public get(index: number): DataAwsDynamodbTableReplicaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDynamodbTableReplicaOutputReference <a name="DataAwsDynamodbTableReplicaOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplica">DataAwsDynamodbTableReplica</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDynamodbTableReplica;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplica">DataAwsDynamodbTableReplica</a>

---


### DataAwsDynamodbTableServerSideEncryptionOutputReference <a name="DataAwsDynamodbTableServerSideEncryptionOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDynamodbTableServerSideEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a>

---


### DataAwsDynamodbTableTtlList <a name="DataAwsDynamodbTableTtlList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTableTtlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.get"></a>

```typescript
public get(index: number): DataAwsDynamodbTableTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDynamodbTableTtlOutputReference <a name="DataAwsDynamodbTableTtlOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer"></a>

```typescript
import { dataAwsDynamodbTable } from '@cdktf/provider-aws'

new dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtl">DataAwsDynamodbTableTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDynamodbTableTtl;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtl">DataAwsDynamodbTableTtl</a>

---



