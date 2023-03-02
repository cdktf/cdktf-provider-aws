# `gluePartitionIndex` Submodule <a name="`gluePartitionIndex` Submodule" id="@cdktf/provider-aws.gluePartitionIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GluePartitionIndex <a name="GluePartitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index aws_glue_partition_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer"></a>

```typescript
import { gluePartitionIndex } from '@cdktf/provider-aws'

new gluePartitionIndex.GluePartitionIndex(scope: Construct, id: string, config: GluePartitionIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig">GluePartitionIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig">GluePartitionIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex">putPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPartitionIndex` <a name="putPartitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex"></a>

```typescript
public putPartitionIndex(value: GluePartitionIndexPartitionIndex): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts"></a>

```typescript
public putTimeouts(value: GluePartitionIndexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct"></a>

```typescript
import { gluePartitionIndex } from '@cdktf/provider-aws'

gluePartitionIndex.GluePartitionIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement"></a>

```typescript
import { gluePartitionIndex } from '@cdktf/provider-aws'

gluePartitionIndex.GluePartitionIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource"></a>

```typescript
import { gluePartitionIndex } from '@cdktf/provider-aws'

gluePartitionIndex.GluePartitionIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndex">partitionIndex</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference">GluePartitionIndexPartitionIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference">GluePartitionIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndexInput">partitionIndexInput</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndex"></a>

```typescript
public readonly partitionIndex: GluePartitionIndexPartitionIndexOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference">GluePartitionIndexPartitionIndexOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeouts"></a>

```typescript
public readonly timeouts: GluePartitionIndexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference">GluePartitionIndexTimeoutsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndexInput"></a>

```typescript
public readonly partitionIndexInput: GluePartitionIndexPartitionIndex;
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GluePartitionIndexTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a> | cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GluePartitionIndexConfig <a name="GluePartitionIndexConfig" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.Initializer"></a>

```typescript
import { gluePartitionIndex } from '@cdktf/provider-aws'

const gluePartitionIndexConfig: gluePartitionIndex.GluePartitionIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#database_name GluePartitionIndex#database_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.partitionIndex">partitionIndex</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | partition_index block. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#table_name GluePartitionIndex#table_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#catalog_id GluePartitionIndex#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#id GluePartitionIndex#id}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#database_name GluePartitionIndex#database_name}.

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.partitionIndex"></a>

```typescript
public readonly partitionIndex: GluePartitionIndexPartitionIndex;
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

partition_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#partition_index GluePartitionIndex#partition_index}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#table_name GluePartitionIndex#table_name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#catalog_id GluePartitionIndex#catalog_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#id GluePartitionIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GluePartitionIndexTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#timeouts GluePartitionIndex#timeouts}

---

### GluePartitionIndexPartitionIndex <a name="GluePartitionIndexPartitionIndex" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.Initializer"></a>

```typescript
import { gluePartitionIndex } from '@cdktf/provider-aws'

const gluePartitionIndexPartitionIndex: gluePartitionIndex.GluePartitionIndexPartitionIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.indexName">indexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#index_name GluePartitionIndex#index_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.keys">keys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#keys GluePartitionIndex#keys}. |

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#index_name GluePartitionIndex#index_name}.

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#keys GluePartitionIndex#keys}.

---

### GluePartitionIndexTimeouts <a name="GluePartitionIndexTimeouts" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.Initializer"></a>

```typescript
import { gluePartitionIndex } from '@cdktf/provider-aws'

const gluePartitionIndexTimeouts: gluePartitionIndex.GluePartitionIndexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#create GluePartitionIndex#create}. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#delete GluePartitionIndex#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#create GluePartitionIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index#delete GluePartitionIndex#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GluePartitionIndexPartitionIndexOutputReference <a name="GluePartitionIndexPartitionIndexOutputReference" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer"></a>

```typescript
import { gluePartitionIndex } from '@cdktf/provider-aws'

new gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetKeys">resetKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIndexName` <a name="resetIndexName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetIndexName"></a>

```typescript
public resetIndexName(): void
```

##### `resetKeys` <a name="resetKeys" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetKeys"></a>

```typescript
public resetKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexStatus">indexStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keysInput">keysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keys">keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexStatus`<sup>Required</sup> <a name="indexStatus" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexStatus"></a>

```typescript
public readonly indexStatus: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keysInput"></a>

```typescript
public readonly keysInput: string[];
```

- *Type:* string[]

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GluePartitionIndexPartitionIndex;
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

---


### GluePartitionIndexTimeoutsOutputReference <a name="GluePartitionIndexTimeoutsOutputReference" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer"></a>

```typescript
import { gluePartitionIndex } from '@cdktf/provider-aws'

new gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GluePartitionIndexTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a> | cdktf.IResolvable

---



