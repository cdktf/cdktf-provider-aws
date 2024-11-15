# `dataAwsTimestreamwriteTable` Submodule <a name="`dataAwsTimestreamwriteTable` Submodule" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsTimestreamwriteTable <a name="DataAwsTimestreamwriteTable" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/timestreamwrite_table aws_timestreamwrite_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable(scope: Construct, id: string, config: DataAwsTimestreamwriteTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig">DataAwsTimestreamwriteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig">DataAwsTimestreamwriteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsTimestreamwriteTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isConstruct"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isTerraformElement"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isTerraformDataSource"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.generateConfigForImport"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsTimestreamwriteTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsTimestreamwriteTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsTimestreamwriteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/timestreamwrite_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsTimestreamwriteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.magneticStoreWriteProperties">magneticStoreWriteProperties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList">DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.retentionProperties">retentionProperties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList">DataAwsTimestreamwriteTableRetentionPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList">DataAwsTimestreamwriteTableSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.tableStatus">tableStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `magneticStoreWriteProperties`<sup>Required</sup> <a name="magneticStoreWriteProperties" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.magneticStoreWriteProperties"></a>

```typescript
public readonly magneticStoreWriteProperties: DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList">DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList</a>

---

##### `retentionProperties`<sup>Required</sup> <a name="retentionProperties" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.retentionProperties"></a>

```typescript
public readonly retentionProperties: DataAwsTimestreamwriteTableRetentionPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList">DataAwsTimestreamwriteTableRetentionPropertiesList</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.schema"></a>

```typescript
public readonly schema: DataAwsTimestreamwriteTableSchemaList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList">DataAwsTimestreamwriteTableSchemaList</a>

---

##### `tableStatus`<sup>Required</sup> <a name="tableStatus" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.tableStatus"></a>

```typescript
public readonly tableStatus: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsTimestreamwriteTableConfig <a name="DataAwsTimestreamwriteTableConfig" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

const dataAwsTimestreamwriteTableConfig: dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/timestreamwrite_table#database_name DataAwsTimestreamwriteTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/timestreamwrite_table#name DataAwsTimestreamwriteTable#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/timestreamwrite_table#database_name DataAwsTimestreamwriteTable#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/timestreamwrite_table#name DataAwsTimestreamwriteTable#name}.

---

### DataAwsTimestreamwriteTableMagneticStoreWriteProperties <a name="DataAwsTimestreamwriteTableMagneticStoreWriteProperties" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWriteProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWriteProperties.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

const dataAwsTimestreamwriteTableMagneticStoreWriteProperties: dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWriteProperties = { ... }
```


### DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation <a name="DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

const dataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation: dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation = { ... }
```


### DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration <a name="DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

const dataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration: dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration = { ... }
```


### DataAwsTimestreamwriteTableRetentionProperties <a name="DataAwsTimestreamwriteTableRetentionProperties" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionProperties.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

const dataAwsTimestreamwriteTableRetentionProperties: dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionProperties = { ... }
```


### DataAwsTimestreamwriteTableSchema <a name="DataAwsTimestreamwriteTableSchema" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchema.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

const dataAwsTimestreamwriteTableSchema: dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchema = { ... }
```


### DataAwsTimestreamwriteTableSchemaCompositePartitionKey <a name="DataAwsTimestreamwriteTableSchemaCompositePartitionKey" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKey.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

const dataAwsTimestreamwriteTableSchemaCompositePartitionKey: dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKey = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList <a name="DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.get"></a>

```typescript
public get(index: number): DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList <a name="DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.get"></a>

```typescript
public get(index: number): DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference <a name="DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList">DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList">DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

---


### DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList <a name="DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference <a name="DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix">objectKeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption"></a>

```typescript
public readonly encryptionOption: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `objectKeyPrefix`<sup>Required</sup> <a name="objectKeyPrefix" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix"></a>

```typescript
public readonly objectKeyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

---


### DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference <a name="DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites">enableMagneticStoreWrites</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation">magneticStoreRejectedDataLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList">DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWriteProperties">DataAwsTimestreamwriteTableMagneticStoreWriteProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableMagneticStoreWrites`<sup>Required</sup> <a name="enableMagneticStoreWrites" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites"></a>

```typescript
public readonly enableMagneticStoreWrites: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `magneticStoreRejectedDataLocation`<sup>Required</sup> <a name="magneticStoreRejectedDataLocation" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation"></a>

```typescript
public readonly magneticStoreRejectedDataLocation: DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList">DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsTimestreamwriteTableMagneticStoreWriteProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableMagneticStoreWriteProperties">DataAwsTimestreamwriteTableMagneticStoreWriteProperties</a>

---


### DataAwsTimestreamwriteTableRetentionPropertiesList <a name="DataAwsTimestreamwriteTableRetentionPropertiesList" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsTimestreamwriteTableRetentionPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsTimestreamwriteTableRetentionPropertiesOutputReference <a name="DataAwsTimestreamwriteTableRetentionPropertiesOutputReference" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays">magneticStoreRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours">memoryStoreRetentionPeriodInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionProperties">DataAwsTimestreamwriteTableRetentionProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `magneticStoreRetentionPeriodInDays`<sup>Required</sup> <a name="magneticStoreRetentionPeriodInDays" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays"></a>

```typescript
public readonly magneticStoreRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `memoryStoreRetentionPeriodInHours`<sup>Required</sup> <a name="memoryStoreRetentionPeriodInHours" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours"></a>

```typescript
public readonly memoryStoreRetentionPeriodInHours: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsTimestreamwriteTableRetentionProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableRetentionProperties">DataAwsTimestreamwriteTableRetentionProperties</a>

---


### DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList <a name="DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.get"></a>

```typescript
public get(index: number): DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference <a name="DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord">enforcementInRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKey">DataAwsTimestreamwriteTableSchemaCompositePartitionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforcementInRecord`<sup>Required</sup> <a name="enforcementInRecord" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord"></a>

```typescript
public readonly enforcementInRecord: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsTimestreamwriteTableSchemaCompositePartitionKey;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKey">DataAwsTimestreamwriteTableSchemaCompositePartitionKey</a>

---


### DataAwsTimestreamwriteTableSchemaList <a name="DataAwsTimestreamwriteTableSchemaList" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.get"></a>

```typescript
public get(index: number): DataAwsTimestreamwriteTableSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsTimestreamwriteTableSchemaOutputReference <a name="DataAwsTimestreamwriteTableSchemaOutputReference" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.Initializer"></a>

```typescript
import { dataAwsTimestreamwriteTable } from '@cdktf/provider-aws'

new dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.property.compositePartitionKey">compositePartitionKey</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList">DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchema">DataAwsTimestreamwriteTableSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compositePartitionKey`<sup>Required</sup> <a name="compositePartitionKey" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.property.compositePartitionKey"></a>

```typescript
public readonly compositePartitionKey: DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList">DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsTimestreamwriteTableSchema;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsTimestreamwriteTable.DataAwsTimestreamwriteTableSchema">DataAwsTimestreamwriteTableSchema</a>

---



