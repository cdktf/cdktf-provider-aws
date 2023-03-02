# `dataAwsDynamodbTableItem` Submodule <a name="`dataAwsDynamodbTableItem` Submodule" id="@cdktf/provider-aws.dataAwsDynamodbTableItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDynamodbTableItem <a name="DataAwsDynamodbTableItem" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item aws_dynamodb_table_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer"></a>

```typescript
import { dataAwsDynamodbTableItem } from '@cdktf/provider-aws'

new dataAwsDynamodbTableItem.DataAwsDynamodbTableItem(scope: Construct, id: string, config: DataAwsDynamodbTableItemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig">DataAwsDynamodbTableItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig">DataAwsDynamodbTableItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetExpressionAttributeNames">resetExpressionAttributeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetProjectionExpression">resetProjectionExpression</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetExpressionAttributeNames` <a name="resetExpressionAttributeNames" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetExpressionAttributeNames"></a>

```typescript
public resetExpressionAttributeNames(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectionExpression` <a name="resetProjectionExpression" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetProjectionExpression"></a>

```typescript
public resetProjectionExpression(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isConstruct"></a>

```typescript
import { dataAwsDynamodbTableItem } from '@cdktf/provider-aws'

dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformElement"></a>

```typescript
import { dataAwsDynamodbTableItem } from '@cdktf/provider-aws'

dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformDataSource"></a>

```typescript
import { dataAwsDynamodbTableItem } from '@cdktf/provider-aws'

dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.item">item</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNamesInput">expressionAttributeNamesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpressionInput">projectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNames">expressionAttributeNames</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpression">projectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `item`<sup>Required</sup> <a name="item" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.item"></a>

```typescript
public readonly item: string;
```

- *Type:* string

---

##### `expressionAttributeNamesInput`<sup>Optional</sup> <a name="expressionAttributeNamesInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNamesInput"></a>

```typescript
public readonly expressionAttributeNamesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `projectionExpressionInput`<sup>Optional</sup> <a name="projectionExpressionInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpressionInput"></a>

```typescript
public readonly projectionExpressionInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `expressionAttributeNames`<sup>Required</sup> <a name="expressionAttributeNames" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNames"></a>

```typescript
public readonly expressionAttributeNames: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `projectionExpression`<sup>Required</sup> <a name="projectionExpression" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpression"></a>

```typescript
public readonly projectionExpression: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDynamodbTableItemConfig <a name="DataAwsDynamodbTableItemConfig" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.Initializer"></a>

```typescript
import { dataAwsDynamodbTableItem } from '@cdktf/provider-aws'

const dataAwsDynamodbTableItemConfig: dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#key DataAwsDynamodbTableItem#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#table_name DataAwsDynamodbTableItem#table_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.expressionAttributeNames">expressionAttributeNames</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#expression_attribute_names DataAwsDynamodbTableItem#expression_attribute_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#id DataAwsDynamodbTableItem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.projectionExpression">projectionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#projection_expression DataAwsDynamodbTableItem#projection_expression}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#key DataAwsDynamodbTableItem#key}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#table_name DataAwsDynamodbTableItem#table_name}.

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="expressionAttributeNames" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.expressionAttributeNames"></a>

```typescript
public readonly expressionAttributeNames: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#expression_attribute_names DataAwsDynamodbTableItem#expression_attribute_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#id DataAwsDynamodbTableItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectionExpression`<sup>Optional</sup> <a name="projectionExpression" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.projectionExpression"></a>

```typescript
public readonly projectionExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#projection_expression DataAwsDynamodbTableItem#projection_expression}.

---



